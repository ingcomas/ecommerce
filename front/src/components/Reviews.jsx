import React from 'react'
import Stars from './Stars'
import { FaStar } from 'react-icons/fa'

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
  const{handleSubmit,reviews,stars,handleClick,promedio} = this.props
  return (
    <div>
    <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={handleSubmit}>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Title</span>
                    </div>
                    <input type="text" name="title" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    
                    <Stars handleClick={handleClick} mouseOn={this.mouseOn} mouseLeave={this.mouseLeave} starHighlight={this.starHighlight} hoverStar={this.state.hoverStar} hoverIn={this.state.hoverIn}
                    />
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