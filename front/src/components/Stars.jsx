import React from 'react'
import { css } from 'glamor'
const hover=css({
  color: '#f1d10b',
  ':hover': {
    color:"#a89208",
  },
})
var hoverStar = 0
const starHighlight = (hover)=>{
  hoverStar = hover
  return hoverStar
}
const starsArr = [1,2,3,4,5]
export default ({handleClick})=>(
    <div>
      {starsArr.map((star,i)=>{
        return (     
          (hoverStar > i)?
          <i onClick={()=>handleClick(star)}
          onMouseEnter={()=> (starHighlight(star))} 
          className="fas fa-star fa-2x" 
          {...hover}
          key={star}></i>
          :
          <i onClick={()=>handleClick(star)}
          onMouseEnter={()=> starHighlight(star)} 
          className="fas fa-star fa-2x" 
          key={star}></i>
          )
        })}
    </div>
)