import React, { useState, ChangeEvent, FormEvent } from 'react';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import sendEmail from '../../utils/frontEmail';

import {
  Container,
  InputContainer,
  Label,
  Button,
  Input,
  TextArea,
  SendIcon,
} from './styles';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(name, email, message);
    // e.target.forEach((i: HTMLInputElement) => {
    //   console.log(i.value);
    // });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <InputContainer>
          <Label>Name</Label>
          <Input
            required
            name="name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </InputContainer>
        <InputContainer>
          <Label>E-mail</Label>
          <Input
            required
            name="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
        </InputContainer>
        <InputContainer>
          <Label>Message</Label>
          <TextArea
            required
            name="message"
            value={message}
            onChange={onChangeMessage}
          />
        </InputContainer>
        <Button type="submit">
          <SendIcon icon={faPaperPlane} />
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
