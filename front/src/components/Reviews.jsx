import React from 'react'
import Stars from './Stars'
import { FaStar } from 'react-icons/fa'

export default function Reviews ({newReview,reviews,ratingPromedio,stars,handleClick}){
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={newReview}>
                <div class="input-group input-group-sm mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Title</span>
                    </div>
                    <input type="text" name="title" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

                    <Stars handleClick={handleClick}/>
                    
                    </div>
                <textarea className="col-md-5" id="new_message" name="content"
                placeholder="Type in your message" rows="5"></textarea>
                <h6 className="pull-right">320 characters remaining</h6>
                <button className="btn btn-info" type="submit">Post New Review</button>
              </form>
            </div>
          </div>
        {(ratingPromedio)?<h2>Product valuation {stars(ratingPromedio).map((star,i)=> <FaStar key={i} color="#f1d10b"/> )} </h2>
        :null
      }

        {reviews.map((review)=> {
          return(
            <div className="container" key={review.id}>
              <div class="col-md-5">
                <div className="media-body">
                  <h4 className="media-heading">{review.title}</h4>
                    <p>{stars(review.rating).map((star,i)=> <FaStar key={i} color="#f1d10b"/> )}</p>
                </div>
                <section className="post-body">
                  <p>{review.content}</p>
                </section>
              </div>
            </div>
            )
          })
        }
    </div>
  )
}