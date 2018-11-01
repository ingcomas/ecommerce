import React from 'react'
export default function Reviews ({newReview,reviews}){
  return (
    <div className="container">
      {
        reviews.map((review)=> {
          return(
            <div key={review.id}>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            </div>
          
          )
        })
      }
      <form onSubmit={newReview}>
      <div className="input-group">
          {/* <div className="input-group-prepend">
            <span className="input-group-text">First name/ Last name</span>
          </div> */}
        {/* <input type="text" placeholder="First name" aria-label="First name" className="col-form-label-sm"/> */}
        <input type="text" name="title" placeholder="Title" aria-label="Title" className="col-form-label-sm"/>
      </div>
        
      <div className="form-group">

        <textarea className="col-form-label-lg"
        name="content"
        rows="3"
        >
        </textarea>
      </div>
      <input type="submit" value="Tu opinion nos interesa"/>
      </form>
    </div>
  )
}