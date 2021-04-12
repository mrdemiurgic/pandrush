import React from 'react';

import SocialMedia from '../../components/SocialMedia';

import ContactForm from '../../components/ContactForm';

import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Banner,
  Description,
  InnerContainer,
  Column,
  ContactPoints,
  ContactPoint,
  ContactIcon,
  ContactText,
  ContactIconContainer,
  ContactFormContainer,
} from './styles';

const Contact = () => {
  return (
    <Container id="contact">
      <InnerContainer>
        <Column>
          <ContactPoints>
            <ContactPoint>
              <ContactIconContainer>
                <ContactIcon icon={faEnvelope} />
              </ContactIconContainer>
              <ContactText>
                <a href="mailto:pandrushllc@gmail.com">{`pandrushllc@gmail.com`}</a>
              </ContactText>
            </ContactPoint>
            <ContactPoint>
              <ContactIconContainer>
                <ContactIcon icon={faMobileAlt} />
              </ContactIconContainer>

              <ContactText>(123) 456-7890</ContactText>
            </ContactPoint>
          </ContactPoints>

          <SocialMedia includeEmail={false} />
        </Column>
        <Column>
          <ContactFormContainer>
            <ContactForm />
          </ContactFormContainer>
        </Column>
      </InnerContainer>
    </Container>
  );
};

export default Contact;
