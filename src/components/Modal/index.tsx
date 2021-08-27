import React, { useEffect, useState } from 'react';
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
  const [portal, setPortal] = useState<HTMLDivElement>();

  useEffect(() => {
    setPortal(
      (document.getElementById('portal') as HTMLDivElement) || undefined,
    );
  }, []);

  return portal
    ? ReactDOM.createPortal(
        <S.Overlay $show={show}>
          <S.Body $show={show} />
          <S.Modal>{children}</S.Modal>
        </S.Overlay>,
        portal,
      )
    : null;
};

export default Modal;
