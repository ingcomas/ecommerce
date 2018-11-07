import React,{Component} from 'react'
import Reviews from '../components/Reviews.jsx'
import {connect} from 'react-redux'
import {newReview,fetchReviews,deleteReview} from '../redux/actions/review-action'

function mapStateToProps(state){
  return { comentarios: state.review}
}

function mapDispatchToProps(dispatch){
  return { 
    newReview: function(param,stars,prodId){
      dispatch(newReview(param,stars,prodId))
    },
    fetchReviews: function (prodId){
      dispatch(fetchReviews(prodId))
    },
    deleteReview: function(reviewId,prodId){
      dispatch(deleteReview(reviewId,prodId))
    }
  }
}


class ReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      ratingProm:0,
      stars:0,
      flagStar:true
    }
    this.createStars=this.createStars.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleClick (stars){
    this.setState({
      stars
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    (this.state.stars)?
    this.props.newReview(
      e.target,
      this.state.stars,
      this.props.idProduct):
    this.setState({flagStar:false,stars:0},()=>{})
  }
  deleteClick=(e,reviewId)=>{
    e.preventDefault()
    console.log(reviewId)
    this.props.deleteReview(reviewId,this.props.idProduct)
  }
  createStars = (num)=>{
    var stars = []
    for(var i = 0; i < num; i++){
      stars.push(i)
    }
    return stars
  }

  componentDidMount(){   
    const prodId = this.props.idProduct
    this.props.fetchReviews(prodId);
    this.ratingPromedio()
  }

  ratingPromedio(){
    var aux = 0
    var count = 0
    this.props.comentarios.comentarios && this.props.comentarios.comentarios.forEach(review => {
          aux += review.rating;
          count ++
    });
    aux = Math.round(aux/ count)
    this.setState({ratingProm: aux},()=>{})
  }
  
  render(){
    return (
      <div>
      <Reviews 
      handleSubmit={this.handleSubmit} 
      reviews={this.props.comentarios.comentarios}
      ratingPromedio={this.state.ratingProm}
      promedio={this.props.comentarios.average}
      stars={this.createStars}
      handleClick={this.handleClick}
      flagStar={this.state.flagStar}
      deleteClick={this.deleteClick}
      estrellas={this.state.stars}
      />
      </div>
    )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)