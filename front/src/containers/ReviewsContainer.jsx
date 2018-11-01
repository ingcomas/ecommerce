import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'
import Reviews from '../components/Reviews.jsx'
import {RatingWidget,Rating,Star} from '../components/Stars'

import axios from 'axios'
export default class ReviewsContainer extends Component{
  constructor(){
    super()
    this.state={
      reviews:[]
    }
  }
  
  newReview(e) {
    e.preventDefault();
    axios.post('api/review/newReview', {
      title: e.target.title.value,
      content: e.target.content.value,
    })
  }
  componentDidMount(){
    axios.get('api/review')
    .then(response => {
      const reviews = response.data;
      this.setState({reviews})
    })
}

  render(){
    return (
      <div>
      {/* <RatingWidget /> */}
      <Reviews newReview={this.newReview} reviews={this.state.reviews} />
      </div>
    )
  }
}



