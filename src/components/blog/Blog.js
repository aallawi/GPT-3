import React from "react";
import { Article } from "../../components";
import "./blog.css";

import blog01 from "../../photo/blog01.png";
import blog02 from "../../photo/blog02.png";
import blog03 from "../../photo/blog03.png";
import blog04 from "../../photo/blog04.png";
import blog05 from "../../photo/blog05.png";

const Blog = () => {
  return (
    <div className=" blog section_padding">
      <div className="blog_heading">
        <h1 className="gradient_text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog_container">
        <div className="groupA">
          <Article photo = {blog01} date = "Sep 26, 2021" text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="groupB">
          <Article photo = {blog02} date = "Sep 26, 2021" text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article photo = {blog03} date = "Sep 26, 2021" text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article photo = {blog04} date = "Sep 26, 2021" text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article photo = {blog05} date = "Sep 26, 2021" text = "GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
