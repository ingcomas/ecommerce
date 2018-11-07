import React from 'react'
import Stars from './Stars'
import { FaStar } from 'react-icons/fa'
import { right } from 'glamor';

export default class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hoverIn:0,
      hoverStar:0,
    }
  }

  mouseOn = (hoverIn)=>{
    this.setState({hoverIn},()=>{})
  }
  mouseLeave = ()=>{
    this.setState({hoverIn:0},()=>{})
  }
  starHighlight = (hoverStar)=>{
    this.setState({hoverStar},()=>{})
}
  render(){
  const{handleSubmit,reviews,stars,handleClick,promedio,deleteClick} = this.props
  return (
    <div>
    <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={handleSubmit}>
                <div style={{clear:"both"}}>
                  
                    <h3 style={{float:"left"}} >Name User</h3>
                 
                {(this.props.flagStar)?
                  <div style={{float:"right"}} >  
                    <Stars handleClick={handleClick} mouseOn={this.mouseOn} mouseLeave={this.mouseLeave} starHighlight={this.starHighlight} hoverStar={this.state.hoverStar} hoverIn={this.state.hoverIn}
                    />
                    </div>
                :
                <div style={{float:"right"}}  className="animated 2s shake delay-0s" >  
                <Stars handleClick={handleClick} mouseOn={this.mouseOn} mouseLeave={this.mouseLeave} starHighlight={this.starHighlight} hoverStar={this.state.hoverStar} hoverIn={this.state.hoverIn}
                />
                </div>
                 }                
                </div>
                <textarea className="col-md-12" id="new_message" name="content"
                placeholder="Type in your message" rows="5"></textarea>
                <h6 className="pull-right">320 characters remaining</h6>
                <button className="btn btn-info" type="submit">Post New Review</button>
              </form>
            </div>
          </div>
        {(promedio)? 
          <h2>Product valuation {stars(promedio).map((star,i)=> <FaStar key={i} color="#f1d10b"/> )} </h2>
          :null
        }

      </div>
      <div className="container" style={{color:"black"}}>
        {reviews && reviews.map((review)=> {
          return(

              <div className="row" key={review.id} style={{margin:"10px"}}>
                <div className="col-md-6" >
                  <div className="card" >
                    <div className="card-body" style={{color:"black"}}>
                      <h5 className="card-title">{review.title} {stars(review.rating).map((star,i)=> <FaStar key={i} color="#f1d10b"  style={{float:"right"}}/> )} </h5>
                      <hr/>
                      <p className="card-text" style={{paddingBottom:"50px"}}>{review.content}</p>
                      <button onClick={(e)=>deleteClick(e,review.id)}>
                      <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            )
          })
        }
    </div>
    </div>
  )
}
}