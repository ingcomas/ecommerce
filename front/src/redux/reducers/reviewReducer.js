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
    
    case 'ORDER_PRODUCT':
      var purchaseProduct = false;
      action.orderUser.forEach(order =>{        
        if(order.userId == action.userId){
          order.products.forEach(product => {
            if(product == action.prod.id){
              return purchaseProduct = true
            }
          })
        }
      })
      
      return Object.assign({},state,{purchaseProduct: purchaseProduct})

    default:
      return state;
  }
}