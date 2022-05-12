import React, { useState } from 'react';
import './Contact.css';
import { Button } from '../Components-Styled/StyleButton';
import { ToHome } from '../Components-Styled/ToHome';

const Contact = () => {
  const [nameInput, setNameInput] = useState('Name');

  return (
    <div id="contact" className="contactConteiner">
      <h1>Contact us</h1>
      <form className="formConteiner">
        <input
          className="inputText"
          type="text"
          name="name"
          value={nameInput}
          onFocus={() => setNameInput('')}
          onChange={(e) => setNameInput(e.target.value)}
        />
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
      <div className="toHome">
        <a href="#home">
          <ToHome>Subir</ToHome>
        </a>
      </div>
    </div>
  );
};

export default Contact;
