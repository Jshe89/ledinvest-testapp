import React, { useState } from 'react';
import Loan from '../Loan';
import InvestmentModal from '../../components/InvestmentModal';
import { numberWithCommas } from '../../utils/numberWithCommas';
import { Container, Content, Title, TotalAmount } from './styled';
import curentLoans from '../../mocks/currentLoans.json';

const LoansList = () => {
  const [loans, setLoans] = useState(curentLoans.loans);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState({});

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleInvest = selectedValue => {
    setIsShowModal(true);
    setSelectedLoan(selectedValue);
  };

  const getAvailableTotalAmount = () => {
    const totalAmount = loans
      .reduce((acc, currentValue) => {
        return acc + Number(currentValue.available.replace(/,/g, ''));
      }, 0)
      .toLocaleString();

    return numberWithCommas(totalAmount);
  };

  const handleLoanInvest = (loanId, investValue) => {
    const newLoans = loans.map(loan => {
      if (loan.id === loanId) {
        const available = Number(loan.available.replace(/,/g, ''));
        const amount = Number(loan.amount.replace(/,/g, ''));
        const invest = Number(investValue.replace(/,/g, ''));
        return {
          ...loan,
          invested: true,
          available: numberWithCommas(available - invest),
          amount: numberWithCommas(amount + invest)
        };
      }
      return loan;
    });

    setLoans(newLoans);
    setSelectedLoan({});
  };

  return (
    <Container>
      <Content>
        <Title>current loans</Title>
        {loans.map(loan => (
          <Loan key={loan.id} loanData={loan} handleInvest={() => handleInvest(loan)} />
        ))}
        <TotalAmount>
          Total amount available for investments: <b>£{getAvailableTotalAmount()}</b>
        </TotalAmount>
      </Content>
      <InvestmentModal
        isOpen={isShowModal}
        toggleModal={toggleModal}
        modalData={selectedLoan}
        handleSubmit={handleLoanInvest}
      />
    </Container>
  );
};

export default LoansList;
