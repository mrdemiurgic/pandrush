import React from 'react';

import Modal from '../Modal';

import * as S from './BookingModalStyles';

const BookingModal = () => {
  return (
    <Modal show={showModal}>
      <S.SelectedPackage>Hey</S.SelectedPackage>
    </Modal>
  );
};
