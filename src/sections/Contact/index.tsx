import React from 'react';

import Social from '../../components/Social';

import contact from '../../content/contact.json';

import { Container, Banner, Description, InnerContainer } from './styles';

const Contact = () => {
  return (
    <Container id="contact">
      <InnerContainer>
        <Banner>Get in touch</Banner>
        <Description>
          Please don't hesitate to reach out to me for any reason! If you have a
          film project in mind, I can help bring it to reality!
        </Description>

        {contact.map(({ type, url, text, color }) => (
          <Social key={type} type={type} url={url} text={text} color={color} />
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Contact;
