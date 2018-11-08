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

export const newReview = (param,stars,prodId,user)=>(dispatch)=>{
  axios.post('/api/review/newReview', {
    content: param.content.value,
    rating: stars,
    prodId:prodId,
    user:user
  })
  .then(review =>dispatch(createdReview(review.data)))
  .then(response => dispatch(fetchReviews(prodId)))
}

export const fetchReviews = (prodId) => (dispatch) => {
  axios.get(`/api/review/${prodId}`)
  .then(response => dispatch(loadReviews(response.data)))
}

export const deleteReview = (reviewId,prodId) => (dispatch) => {
  axios.get(`/api/review/delete/${reviewId}`)
  .then(response => dispatch(fetchReviews(prodId)))
}