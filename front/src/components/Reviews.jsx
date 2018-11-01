import React from 'react'
export default function Reviews (){
  return (
    <div>
    
      <div className="input-group">
          {/* <div className="input-group-prepend">
            <span className="input-group-text">First name/ Last name</span>
          </div> */}
        <input type="text" placeholder="First name" aria-label="First name" className="col-form-label-sm"/>
        <input type="text" placeholder="Last name" aria-label="Last name" className="col-form-label-sm"/>
      </div>
        
      <div className="form-group">
        {/* <label htmlFor="exampleFormControlTextarea1">Review</label> */}
        <textarea className="col-form-label-lg" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    
    </div>
  )
}