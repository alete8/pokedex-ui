import React from 'react';
import './Contact.css';
import { Button } from '../Components-Styled/StyleButton';

const Contact = () => {
  return (
    <div id="contact" className="contactConteiner">
      <h1>Contact us</h1>
      <form className="formConteiner">
        <input className="inputText" type="text" name="name" value="Name" />
        <input
          className="inputText"
          type="text"
          name="email"
          value="Email address"
        />
        <input
          className="inputText"
          type="text"
          name="subject"
          value="Subject"
        />
        <div>
          <textarea className="areaText" name="msg" rows="30">
            Message
          </textarea>
        </div>
        <input className="inputBtn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
