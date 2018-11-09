import React from 'react'
import Stars from './Stars'
import { FaStar } from 'react-icons/fa'

export default class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hoverStar:0,
      textarea:"",
      check:true
    }
  }

  mouseLeave = ()=>{
    this.setState({hoverStar:0},()=>{})
  }

  starHighlight = (hoverStar)=>{
    this.setState({hoverStar},()=>{})
  }

  text=(e)=>{
    this.setState({textarea:e.target.value},()=>{});
    e.target.value.length != 0 && e.target.value.length < 320 ?
    this.setState({check:false} , ()=>{}) : this.setState({check:true},()=>{})
  }

  render(){
  const{handleSubmit,reviews,stars,handleClick,promedio,deleteClick,user,cleanForm,purchaseProduct} = this.props
  return (
    <div>      
      {(user.id && purchaseProduct)? 
        <div className="container">
          <div className="row">
            <div className="col-md-5">

              <form onSubmit={(e)=>{handleSubmit(e) ;cleanForm(e)}}>
                <div style={{clear:"both"}}>
                    <h3 style={{float:"left" ,color:"white"}} >{`${user.first_name} ${user.last_name}`}</h3>

                  <div style={{float:"right"}}  className={(this.props.flagStar)? null: `animated 2s shake delay-0s`} >  
                    <Stars 
                      handleClick={handleClick}
                      mouseLeave={this.mouseLeave} 
                      starHighlight={this.starHighlight} 
                      estrellas={this.props.estrellas}
                      hoverStar={this.state.hoverStar} 
                    />
                  </div>
                 
                </div>
                <textarea className="col-md-12" id="new_message" name="content"
                placeholder="Type in your message" rows="5" onChange={(e)=>this.text(e)}></textarea>
                <h6 className="pull-right">
                {((320- this.state.textarea.length) >0)? `${(320 - this.state.textarea.length)}  characters remaining`
                  : `Please stop writing`}
                 </h6>
                <button className="btn btn-info" 
                disabled={this.state.check}>Post New Review</button>
              </form>

            </div>
          </div>
         </div>:null}
      <div className="container" style={{color:"black"}}>
        {(promedio)? 
          <h2 style={{color:"white"}}>Product valuation {stars(promedio).map((star,i)=> 
          <FaStar key={i} color="#f1d10b"/> )} </h2>
          :null
        }
        {reviews && reviews.map((review)=> {
          return(
            <div className="row" key={review.id} style={{margin:"10px"}}>
              <div className="col-md-6" >
                <div className="card" >
                  <div className="card-body" style={{color:"black"}}>
                    <h5 className="card-title">{review.title} {stars(review.rating).map((star,i)=> <FaStar key={i} color="#f1d10b"  style={{float:"right"}}/> )} </h5>
                    <hr/>
                    <p className="card-text" style={{paddingBottom:"50px"}}>{review.content}</p>
                    {(review.userId == user.id || (user.access))?
                      <button className="btn btn-danger" onClick={(e)=>deleteClick(e,review.id)}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    :null}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )}
}