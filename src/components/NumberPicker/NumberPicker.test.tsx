import React from 'react';

import NumberPicker from './index';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('NumberPicker smoke test', () => {
  const onChangeMock = jest.fn();

  render(
    <NumberPicker min={0} max={20} initialValue={5} onChange={onChangeMock} />,
  );

  const incrementButton = screen.getByLabelText(/increment/i);
  const decrementButton = screen.getByLabelText(/decrement/i);

  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
  expect(screen.getByRole('spinbutton')).toHaveTextContent('5');

  userEvent.click(incrementButton);
  userEvent.click(decrementButton);
  expect(onChangeMock).toBeCalledTimes(2);
});

test('NumberPicker increments correctly', () => {
  const mockHandler = (newValue: number) => newValue;

  const onChangeMock = jest.fn(mockHandler);

  render(
    <NumberPicker min={0} max={20} initialValue={5} onChange={onChangeMock} />,
  );

  const incrementButton = screen.getByLabelText(/increment/i);
  userEvent.click(incrementButton);

  expect(screen.getByRole('spinbutton')).toHaveTextContent('6');
  expect(onChangeMock).toHaveReturnedWith(6);
});

test('NumberPicker will not increment beyond max value', () => {
  const mockHandler = (newValue: number) => newValue;

  const onChangeMock = jest.fn(mockHandler);

  render(
    <NumberPicker min={0} max={20} initialValue={20} onChange={onChangeMock} />,
  );

  const incrementButton = screen.getByLabelText(/increment/i);
  userEvent.click(incrementButton);

  expect(screen.getByRole('spinbutton')).toHaveTextContent('20');
  expect(onChangeMock).toHaveReturnedWith(20);
});

test('NumberPicker decrements correctly', () => {
  const mockHandler = (newValue: number) => newValue;

  const onChangeMock = jest.fn(mockHandler);

  render(
    <NumberPicker min={0} max={20} initialValue={5} onChange={onChangeMock} />,
  );

  const decrementButton = screen.getByLabelText(/decrement/i);
  userEvent.click(decrementButton);

  expect(screen.getByRole('spinbutton')).toHaveTextContent('4');
  expect(onChangeMock).toHaveReturnedWith(4);
});

test('NumberPicker will not decrement beyond min value', () => {
  const mockHandler = (newValue: number) => newValue;

  const onChangeMock = jest.fn(mockHandler);

  render(
    <NumberPicker min={0} max={20} initialValue={0} onChange={onChangeMock} />,
  );

  const decrementButton = screen.getByLabelText(/decrement/i);
  userEvent.click(decrementButton);

  expect(screen.getByRole('spinbutton')).toHaveTextContent('0');
  expect(onChangeMock).toHaveReturnedWith(0);
});

test('NumberPicker responds to arrow key presses on focus', () => {
  const mockHandler = (newValue: number) => newValue;

  const onChangeMock = jest.fn(mockHandler);

  render(
    <NumberPicker min={0} max={20} initialValue={5} onChange={onChangeMock} />,
  );

  userEvent.tab();

  const spinBox = screen.getByRole('spinbutton');

  expect(spinBox).toHaveFocus();

  userEvent.type(document.body, '{arrowup}', { skipClick: true });
  expect(spinBox).toHaveTextContent('6');
  expect(onChangeMock).toHaveReturnedWith(6);

  userEvent.type(document.body, '{arrowdown}', { skipClick: true });
  expect(spinBox).toHaveTextContent('5');
  expect(onChangeMock).toHaveReturnedWith(5);

  userEvent.type(document.body, '{arrowright}', { skipClick: true });
  expect(spinBox).toHaveTextContent('6');
  expect(onChangeMock).toHaveReturnedWith(6);

  userEvent.type(document.body, '{arrowleft}', { skipClick: true });
  expect(spinBox).toHaveTextContent('5');
  expect(onChangeMock).toHaveReturnedWith(5);
});
