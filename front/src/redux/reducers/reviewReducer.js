export default ( state = {} , action ) => {
  switch (action.type) {
  
    case 'CREATED_REVIEW':
      return Object.assign({},state,{newReview:action.review})
    
    case 'LOAD_REVIEWS':
      var prom = 0; 
      action.allReviews.forEach(element => {
        prom += element.rating
      });
      var average = Math.round(prom/ action.allReviews.length)
      return Object.assign({},state,{ comentarios:action.allReviews, average: average });
    
    case 'AVERAGE_REVIEWS':
      return Object.assign({},state,{promedio:action.average})
    
    case 'DELETE_REVIEW':
      return Object.assign({},state,{reviewDelete:action.review})
    default:
      return state;
  }
}