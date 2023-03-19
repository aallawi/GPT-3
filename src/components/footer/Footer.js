import React from "react";
import "./footer.css";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_header">
        <h1 className="gradient_text">Do you want to step in to the future before others?</h1>
      </div>
      <div className="footer_btn">
        <p>Request Early Access</p>
      </div>
      <div className="footer_links">
        <div className="link_one">
          <h1>GPT-3</h1>
          <p>
            Crechterwoord K12 <br /> 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="link_two">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="link_three">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="link_four">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 <br /> 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="footer_copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
