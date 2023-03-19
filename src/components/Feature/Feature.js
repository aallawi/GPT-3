import React from 'react'
import "./feature.css"



const Feature = ({title , text}) => {
  return (
    <div className="feature">
      <div className="feature_title">
        <div className="wave" />
        <h1>{title}</h1>
      </div>
      <div className="feature_text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;
