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
  StatusBox,
} from './styles';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [status, setStatus] = useState<string>('');
  const [showStatus, setShowStatus] = useState<boolean>(false);

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
    setShowStatus(true);
    setStatus('Thank you for your message! We will be in touch soon.');

    setTimeout(() => {
      setShowStatus(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 5000);
    // sendEmail(name, email, message);
  };

  return (
    <Container>
      <StatusBox show={showStatus}>{status}</StatusBox>
      <form onSubmit={onSubmit}>
        <InputContainer>
          <Label>Your Name</Label>
          <Input
            required
            name="name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
        </InputContainer>
        <InputContainer>
          <Label>Your E-mail</Label>
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
        <Button type="submit" disabled={showStatus}>
          <SendIcon icon={faPaperPlane} />
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
