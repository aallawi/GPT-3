import React from 'react'
import "./features.css"
import Feature from '../../components/Feature/Feature';
import data from "./data";


const Features = () => {
  return (
    <div className="features section_padding" id="features">
      <div className="features_heading">
        <h1 className="gradient_text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features_container">
        {data.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))
        }
      </div>
    </div>
  )
}

export default Features;