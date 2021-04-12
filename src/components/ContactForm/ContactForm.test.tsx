import React from 'react';

import ContactForm from './index';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('ContactForm smoke test', () => {
  render(<ContactForm />);

  expect(screen.getByLabelText(/e-?mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});

test('ContactForm input fields are fillable', () => {
  render(<ContactForm />);

  const emailInput = screen.getByLabelText(/e-?mail/i);
  const nameInput = screen.getByLabelText(/name/i);
  const messageInput = screen.getByLabelText(/message/i);

  screen.getByRole('basdfasdf');

  userEvent.type(emailInput, 'hey');
  userEvent.type(nameInput, 'boo');
  userEvent.type(messageInput, 'hoo');

  expect(emailInput).toHaveValue('hey');
  expect(nameInput).toHaveValue('boo');
  expect(messageInput).toHaveValue('hoo');
});
