import React from 'react'
import "./whatGPT3.css"
import Box from './../Box/Box';

const WhatGPT3 = () => {
  return (
    <div className="WhatGPT3" id="wgpt3">
      <div className="whatgpt3_box">
        <Box title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="whatgpt3_text">
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatgpt3_boxs"> 
        <Box title="Chatbots"      text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Box title="Knowledgebase" text="GPT-3's deep learning neural network is a model with over 175 billion machine learning parameters. To put things into scale, the largest trained language model before GPT-3 was Microsoft's Turing NLG model, which had 10 billion parameters." />
        <Box title="Education"     text="Artificial Intelligence (AI) has the potential to address some of the biggest challenges in education today, innovate teaching and learning practices, and ultimately accelerate the progress." />
      </div> 
    </div>
  )
}

export default WhatGPT3;