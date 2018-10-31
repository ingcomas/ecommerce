import React,{Component} from 'react'
import {Route} from 'react-router-dom'
import Reviews from '../components/Reviews.jsx'
import {RatingWidget,Rating,Star} from '../components/Stars'
export default class ReviewsContainer extends Component{
  constructor(){
    super()
    this.state={}
  }
  render(){
    return (
      <div>
      {/* <RatingWidget /> */}
      <Reviews />
      </div>
    )
  }
}
