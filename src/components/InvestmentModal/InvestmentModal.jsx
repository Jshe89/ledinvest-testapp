import React, { useState } from 'react';
import { getLoanEndsIn } from '../../utils/getLoanEndsIn';
import { numberWithCommas } from '../../utils/numberWithCommas';
import Button from '../../shared/Button';
import { Overlay, Container, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputWrapper, Error } from './styled';

const InvestmentModal = ({ isOpen, toggleModal, modalData, handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = event => {
    const targetValue = event.target.value.replace(/\D/g, '');
    const available = modalData.available.replace(',', '');
    const value = numberWithCommas(targetValue);

    if (Number(targetValue) <= 0) {
      setInputValue('');
      setError('');
      return;
    }

    Number(targetValue) > Number(available) ? setError(`Avaliable mount ${modalData.available}`) : setError('');
    setInputValue(value);
  };

  const handleInvest = () => {
    toggleModal();
    setInputValue('');
    setError('');
    handleSubmit(modalData.id, inputValue);
  };

  const handleClickOutside = () => {
    toggleModal();
    setInputValue('');
    setError('');
  };

  return (
    <Container isShow={isOpen}>
      <Overlay onClick={handleClickOutside} />
      <Modal>
        <ModalHeader>invest in loan</ModalHeader>
        <ModalBody>
          Loan title you've clicked
          <br />
          <br />
          Available: £{modalData.available}
          <br />
          Loan ends in: {getLoanEndsIn(modalData.term_remaining)}
          <br />
          <br />
          Investment amount (£)
        </ModalBody>
        <ModalFooter>
          <InputWrapper>
            <Input value={inputValue} isError={!!error} type="text" placeholder="1,000" onChange={handleInputChange} />
            {error && <Error>{error}</Error>}
          </InputWrapper>
          <Button onClick={handleInvest} disabled={!!error || !inputValue}>
            Invest
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default InvestmentModal;
