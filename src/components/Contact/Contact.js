import React, { useState } from 'react';
import styled from 'styled-components';

import PokeButton from '../PokeButton/PokeButton';

const Contact = () => {
  const [nameInput, setNameInput] = useState('Name');
  const [emailInput, setEmailInput] = useState('Email address');
  const [subjectInput, setSubjectInput] = useState('Subject');
  const [msgInput, setMsgInput] = useState('Message');

  return (
    <ContactConteiner id="contact">
      <h1>Contact us</h1>
      <FormConteiner>
        <InputText
          type="text"
          name="name"
          value={nameInput}
          onFocus={() => setNameInput('')}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <InputText
          type="text"
          name="email"
          value={emailInput}
          onFocus={() => setEmailInput('')}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <InputText
          type="text"
          name="subject"
          value={subjectInput}
          onFocus={() => setSubjectInput('')}
          onChange={(e) => setSubjectInput(e.target.value)}
        />
        <TextArea
          name="msg"
          rows="30"
          value={msgInput}
          onFocus={() => setMsgInput('')}
          onChange={(e) => setMsgInput(e.target.value)}
        ></TextArea>
        <PokeButton type="submit" value="Submit" size="lg">
          Enviar
        </PokeButton>
      </FormConteiner>
    </ContactConteiner>
  );
};

export default Contact;

const ContactConteiner = styled.section`
display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 4vw;
    color: rgb(31, 128, 192);

`;

const FormConteiner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  margin: auto;
  align-items: center;
`;

const InputText = styled.input`
  border-radius: 40px 40px;
  width: 40vw;
  padding: 1vw;
  margin-top: 1vw;
  border: 2px black solid;
`;

const TextArea = styled.textarea`
  resize: none;
  border-radius: 30px 30px;
  border: 2px black solid;
  width: 40vw;
  height: 100px;
  padding: 1vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
`;
