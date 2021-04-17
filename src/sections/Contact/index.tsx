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
  ContactLink,
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
                <ContactLink href="mailto:pandrushllc@gmail.com">{`pandrushllc@gmail.com`}</ContactLink>
              </ContactText>
            </ContactPoint>
            <ContactPoint>
              <ContactIconContainer>
                <ContactIcon icon={faMobileAlt} />
              </ContactIconContainer>

              <ContactText>
                <ContactLink href="tel:(123) 456-7890">
                  (123) 456-7890
                </ContactLink>
              </ContactText>
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
