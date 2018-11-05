import axios from 'axios';
const createdReview = (review)=>({
  type:'CREATED_REVIEW',
  review
})
const loadReviews = (allReviews)=>({
  type: 'LOAD_REVIEWS',
  allReviews,
  average:0
})

// const averageReviews = (average) => ({
//   type: "AVERAGE_REVIEWS",
//   average
// })

export const newReview = (param,stars)=>(dispatch)=>{
  axios.post('api/review/newReview', {
    title: (param.title.value),
    content: param.content.value,
    rating: stars
  })
  .then(review=>
    dispatch(createdReview(review.data))).then(response => dispatch(fetchReviews()))
}

export const fetchReviews = () => (dispatch) => {
  axios.get('api/review')
    .then(response => dispatch(loadReviews(response.data)))
}

export const ratingPromedio = () => (dispatch) => {
    ()=> dispatch(averageReviews(5))
}