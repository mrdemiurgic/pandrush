import React from 'react';

import Modal from '../Modal';

import BookingModalForm from './BookingModalForm';

import { useBookingData } from './BookingContext';

import { calculateTotal } from '../../utils/pricing';

import * as S from './BookingModalStyles';

import { BookingModalProps } from './types';
import { faUndo, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const BookingModal = ({
  show,
  close,
  selectedPackage,
  selectedOptions = [],
}: BookingModalProps) => {
  const { name, options = [], basePrice } = selectedPackage || {};
  const total = calculateTotal(basePrice || 0, options, selectedOptions);

  const { state, dispatch } = useBookingData();

  const cancel = () => {
    dispatch({ type: 'reset' });
    close();
  };

  const book = () => {
    // email data
    close();
  };

  return (
    <Modal show={show}>
      <S.Banner>Your selected package:</S.Banner>
      <S.SelectedPackage>
        <S.PackageName>{name}</S.PackageName>
        <S.TotalPrice>Total: ${total}</S.TotalPrice>
      </S.SelectedPackage>
      <BookingModalForm />
      <S.Message>
        Thank you for doing business with us! You will hear from us within 24
        hours.
      </S.Message>

      <S.ButtonBar>
        <S.CancelButton onClick={cancel}>
          <S.ButtonIcon icon={faUndo} />
          Cancel
        </S.CancelButton>

        <S.Button onClick={book}>
          <S.ButtonIcon icon={faCalendarCheck} />
          Book
        </S.Button>
      </S.ButtonBar>
    </Modal>
  );
};

export default BookingModal;
