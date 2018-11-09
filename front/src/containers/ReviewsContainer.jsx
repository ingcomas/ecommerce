import React,{Component} from 'react'
import Reviews from '../components/Reviews.jsx'
import {connect} from 'react-redux'
import {newReview,fetchReviews,deleteReview,pullOrders} from '../redux/actions/review-action'

function mapStateToProps(state){
  return { 
    comentarios: state.review,
  }
}

function mapDispatchToProps(dispatch){
  return { 
    newReview: function(param,stars,prodId,user){
      dispatch(newReview(param,stars,prodId,user))
    },
    fetchReviews: function (prodId){
      dispatch(fetchReviews(prodId))
    },
    deleteReview: function(reviewId,prodId){
      dispatch(deleteReview(reviewId,prodId))
    },
    pullOrders: function(prod,user){
      dispatch(pullOrders(prod,user))
    }
  }
}


class ReviewsContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      ratingProm:0,
      stars:0,
      flagStar:true,
      product:{},
      user:{},
      contador: 0
    }
  }
  
  componentDidMount() {   
    this.props.fetchReviews(this.props.idProduct);
    this.props.product && Object.keys(this.props.user).length && this.props.pullOrders(this.props.product,this.props.user)
    this.setState({product:this.props.product,user:this.props.user},()=>{})
  }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.product && Object.keys(nextProps.user).length){
      (nextProps.product !== this.props.product || nextProps.user !== this.props.user)
      && nextProps.pullOrders(nextProps.product,nextProps.user)
    }
  }

  handleClick = (stars) => {
    this.setState({
      stars
    });
  }

  cleanForm = (e) => {
    e.preventDefault();
    (this.state.stars != 0)? `${e.target.content.value=""}`: null;
    this.setState({stars:0})
  }

  handleSubmit= (e) => {
    e.preventDefault();
    (this.state.stars)?
      this.props.newReview(
        e.target,
        this.state.stars,
        this.props.idProduct,
        this.props.user
      )
    :null
  }

  deleteClick = (e,reviewId) => {
    e.preventDefault()
    this.props.deleteReview(reviewId,this.props.idProduct)
  }

  createStars = (num) => {
    var stars = []
    for(var i = 0; i < num; i++){
      stars.push(i)
    }
    return stars
  }


  ratingPromedio() {
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
    return(
      <div>
      <Reviews 
        cleanForm={this.cleanForm}
        handleSubmit={this.handleSubmit} 
        reviews={this.props.comentarios.comentarios}
        ratingPromedio={this.state.ratingProm}
        promedio={this.props.comentarios.average}
        stars={this.createStars}
        handleClick={this.handleClick}
        flagStar={this.state.flagStar}
        user={this.props.user}
        deleteClick={this.deleteClick}
        estrellas={this.state.stars}
        purchaseProduct={this.props.comentarios.purchaseProduct}
      />
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)