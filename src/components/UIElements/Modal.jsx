import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const SummaryItem = styled.div`
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.cancel ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, selections, totalPrice, onProceed }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Confirm Your Order</Title>
        {selections.map((item, index) => (
          <SummaryItem key={index}>
            {item.name} - {item.manufacturer} (${item.price})
          </SummaryItem>
        ))}
        <SummaryItem>
          <strong>Total Price: ${totalPrice}</strong>
        </SummaryItem>
        <ButtonGroup>
          <Button cancel onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onProceed}>Proceed</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;