// ModalComponent.js
import React, { ReactNode } from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div>
        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
