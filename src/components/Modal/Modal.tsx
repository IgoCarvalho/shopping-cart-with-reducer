import { X } from '@phosphor-icons/react';
import { ReactNode, useState } from 'react';

import '@reach/dialog/styles.css';
import { CloseButton, Container, Dialog } from './Modal.styles';

type ModalProps = {
  children: ReactNode;
  onDismiss: () => void;
};

export function Modal({ children, onDismiss }: ModalProps) {
  function handleDismiss() {
    onDismiss();
  }

  return (
    <Container>
      <Dialog onDismiss={handleDismiss}>
        <CloseButton className="close-button" onClick={handleDismiss}>
          {/* <p>Close</p> */}
          <X size={24} />
        </CloseButton>
        {children}
      </Dialog>
    </Container>
  );
}
