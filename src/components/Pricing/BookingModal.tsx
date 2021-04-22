import React from 'react';

import Modal from '../Modal';

import * as S from './BookingModalStyles';

interface Props {
  show: boolean;
}

const BookingModal = ({ show }: Props) => {
  return (
    <Modal show={showModal}>
      <S.SelectedPackage>Hey</S.SelectedPackage>
    </Modal>
  );
};

export const BookingModal;
