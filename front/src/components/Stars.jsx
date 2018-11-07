import React from 'react'
import { css } from 'glamor'
const hover=css({
  color: '#f1d10b',
  ':hover': {
    color:"#a89208",
  },
})

const starsArr = [1,2,3,4,5]
export default ({estrellas,hoverStar,handleClick,starHighlight,mouseLeave})=>(
    <div>
      {(!estrellas)?
          starsArr.map((star,i)=>{
            return (     
              (estrellas == 0 && hoverStar > i)?
              <i 
                key={star}
                onMouseEnter={()=> (starHighlight(star))}
                onMouseLeave={()=>mouseLeave()} 
                onClick={()=>{handleClick(star)}}
                className="fas fa-star fa-2x" 
                {...hover}
              ></i>
              :  
              <i 
                key={star}
                onMouseEnter={()=> starHighlight(star)} 
                onClick={()=>handleClick(star)}
                className="fas fa-star fa-2x" 
              ></i>)
          })

        : starsArr.map((star,i)=>{
          return((estrellas < star && hoverStar < star)?
            <i 
                key={star}
                onMouseEnter={()=> starHighlight(star)}
                onMouseLeave={()=>mouseLeave()} 
                onClick={()=>{handleClick(i)}}
                className="fas fa-star fa-2x" 
                {...hover}
                style={{color:"#212529"}}
            ></i>
              :
            <i 
                key={star}
                onMouseEnter={()=> (starHighlight(star))}
                onMouseLeave={()=>mouseLeave()} 
                onClick={()=>handleClick(star)}
                className="fas fa-star fa-2x" 
                {...hover}
            ></i>
          )
        })
      }
    </div>
)