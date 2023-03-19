import React from 'react'
import "./possibility.css"
import possibilityImage from "../../photo/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section_padding" id="possibility">
      <div className="possibility_image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility_content">
        <p>
          <a href='#Request'>Request Early Access to Get Started</a>
        </p>
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p className="text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
    </div>
  )
}

export default Possibility