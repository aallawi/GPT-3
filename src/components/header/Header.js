import React from 'react'
import "./header.css"
import people from "../../photo/people.png"
import ai from "../../photo/ai.png"

const Header = () => {
  return (
    <div className="header  section_padding">
      <div className="content">
        <div className="content_text">
          <h1 className="gradient_text">Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>
            The first version of GPT was released in 2018 and contained 117 million parameters. 
            The second version of the model, GPT-2, was released in 2019 with around 1.5 billion parameters. 
            As the latest version, GPT-3 jumps over the last model by a huge margin with over 175 billion parameters, 
            which is more than 100 times its predecessor and ten times more than comparable programs.
          </p>
        </div>
        <div className="content_input">
          <input type="email" placeholder='Your Email Address'  />
          <button>Get Started</button>
        </div>
        <div className="content_people">
          <img src={people} alt="people"></img>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="image">
        <img src={ai} alt="ai"></img>
      </div>
    </div>
  )
}

export default Header
