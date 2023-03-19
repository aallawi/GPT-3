import React ,{ useState } from 'react';
import "./navbars.css";
import { AiOutlineAlignRight , AiOutlineClose } from "react-icons/ai";

// not work
// const Mshort = () => {
//   <div className="navbar-vertical">
//     <div className="menu">
//       <p href="#home">Home</p>
//       <p href="#wgpt3">What Is GPT3?</p>
//       <p href="#possibility">Open AI</p>
//       <p href="#features">Case Studies</p>
//       <p href="#blog">Library</p>
//     </div>
//     <div className="menu-sign">
//       <button type="button">Sign in</button>
//     </div>
//   </div>
// }

const Navbars = () => {
  const [toggleMenue, settoggleMenue] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-horizontal">
        <div className="logo">GPE-3</div>
        <div className="links">
          <p href="#home">Home</p>
          <p href="#wgpt3">What Is GPT3?</p>
          <p href="#possibility">Open AI</p>
          <p href="#features">Case Studies</p>
          <p href="#blog">Library</p>
        </div>
        <div className="sign">
          <button type="button">Sign in</button>
        </div>
      </div>
      <div className="icon">
        {toggleMenue
          ? <AiOutlineClose size={30}  onClick={() => settoggleMenue(false)}/>
          : <AiOutlineAlignRight size={30}  onClick={() => settoggleMenue(true)} />
        }
      </div>

      {toggleMenue 
        ? 
          (
            <div className="navbar-vertical">
            <div className="menu">
              <p href="#home">Home</p>
              <p href="#wgpt3">What Is GPT3?</p>
              <p href="#possibility">Open AI</p>
              <p href="#features">Case Studies</p>
              <p href="#blog">Library</p>
            </div>
            <div className="menu-sign">
              <button type="button">Sign in</button>
            </div>
          </div>
          )
        : " "
      }
      
    </div>
  );
}

export default Navbars;