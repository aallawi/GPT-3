import React from 'react'
import "./box.css"



const Box = ({title , text}) => {
  return (
    <div className="box">
      <div className="box_title">
        <div className="wave" />
        <h1>{title}</h1>
      </div>
      <div className="box_text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Box;
