import React from 'react'
import { FaStar } from 'react-icons/fa'
import { css } from 'glamor'
const hover=css({
    color:"#a89208",
    // paddingTop: "5px",
  ':hover': {
    color: '#f1d10b'
  },
  ':active':{
    color: 'red'
  }
})

const ulStyle = {
  margin:0,
  padding:0
  }
const h3Style = {
  display:"block",
  float:"left",
  padding:0 
  }
export default function Stars({handleClick}){
  return( 
    // <div style={ulStyle} >
    //   <h3 onClick={()=>handleClick(1)} style={h3Style}><i class="fas fa-star fa-sm" {...hover}></i></h3>
    //   <i class="fas fa-ghost fa-lg"></i>
    //   <h3 onClick={()=>handleClick(2)} style={h3Style}><FaStar color="#a89208"/></h3>
    //   <h3 onClick={()=>handleClick(3)} style={h3Style}><FaStar color="#a89208"/></h3>
    //   <h3 onClick={()=>handleClick(4)} style={h3Style}><FaStar color="#a89208"/></h3>
    //   <h3 onClick={()=>handleClick(5)} style={h3Style}><FaStar color="#a89208"/></h3>
    // </div>
    <div>
      <i onClick={()=>handleClick(1)} class="fas fa-star fa-2x" {...hover}></i>
      <i onClick={()=>handleClick(2)} class="fas fa-star fa-2x" {...hover}></i>
      <i onClick={()=>handleClick(3)} class="fas fa-star fa-2x" {...hover}></i>
      <i onClick={()=>handleClick(4)} class="fas fa-star fa-2x" {...hover}></i>
      <i onClick={()=>handleClick(5)} class="fas fa-star fa-2x" {...hover}></i>
    </div>
    
    
    
    
  )
}