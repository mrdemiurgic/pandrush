import React from 'react';
import ReactDOM from 'react-dom';

import * as S from './styles';

interface Props {
  /**
   * Content of Modal
   */
  children: React.ReactNode;
  /**
   * Visibility of modal
   */
  show: boolean;
}

const Modal = ({ children, show }: Props) => {
  return (
    (portalElement &&
      ReactDOM.createPortal(
        <S.Overlay $show={show}>
          <S.Body $show={show} />
          <S.Modal>{children}</S.Modal>
        </S.Overlay>,
        document.querySelector('#portal'),
      )) ||
    null
  );
};

export default Modal;
