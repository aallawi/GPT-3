import React from 'react'
import "./brand.css"

import slack from "../../photo/slack.png"
import atlassian from "../../photo/atlassian.png"
import google from "../../photo/google.png"
import shopify from "../../photo/shopify.png"
import dropbox from "../../photo/dropbox.png"

const Brand = () => {
  return (
    <div className="brand section_padding">
      <div className="brand_box">
        <img src={slack}></img>
      </div>
      <div className="brand_box">
        <img src={atlassian}></img>
      </div>
      <div className="brand_box">
        <img src={google}></img>
      </div>
      <div className="brand_box">
        <img src={shopify}></img>
      </div>
      <div className="brand_box">
        <img src={dropbox}></img>
      </div>
    </div>
  )
}

export default Brand