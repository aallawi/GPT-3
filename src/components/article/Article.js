import React from 'react'
import "./article.css"

const Article = ({ photo , date , text }) => {
  return (
    <div className="article">
      <div className="article_image">
        <img src={photo} alt="article_image" />
      </div>
      <div className="article_content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article ;