import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import Reviews from '../components/Reviews.jsx'
import {RatingWidget,Rating,Star} from '../components/Stars'
import axios from 'axios'

export default class ReviewsContainer extends Component{
  constructor(){
    super()
    this.state={
      reviews:[],
      ratingProm:0,
      rating:[],
      stars:0
    }
    this.createStars=this.createStars.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.newReview=this.newReview.bind(this)
  }
  handleClick (stars){
    console.log(stars)
    this.setState({
      stars
    });
  }
  
  newReview(e) {
    // e.preventDefault();
    axios.post('api/review/newReview', {
      title: (e.target.title.value) ? e.target.title.value : "Anonymous" ,
      content: e.target.content.value,
      rating: this.state.stars
    })
  }
  createStars = (num)=>{
    var stars = []
    for(var i = 0; i < num; i++){
      stars.push(i)
    }
    return stars
  }
  componentDidMount(){   
    axios.get('api/review')
    .then(response => {
      const reviews = response.data;
      this.setState({reviews},()=>{this.ratingPromedio(this.state.reviews)})
    })
  }
  ratingPromedio(reviews){
    var aux = 0
    this.state.reviews.forEach(review => {
      aux += review.rating;
    });
    aux = Math.round(aux/ reviews.length)
    this.setState({ratingProm: aux},()=>{})
  }
  
  
  render(){
    console.log(this.state.stars," Estrellas Puto")
    return (
      <div>
      {/* <RatingWidget /> */}
      {/* <Stars/> */}
      <Reviews newReview={this.newReview} 
      reviews={this.state.reviews}
      ratingPromedio={this.state.ratingProm}
      stars={this.createStars}
      handleClick={this.handleClick}
      />
      </div>
    )
  }
}



