import React from 'react';
import Button from '../../shared/Button';
import { Wrapper, Title, Content, TitleWrapper, Invested } from './styled';

const Loan = ({ loanData, handleInvest }) => {
  const { id, title, invested = false } = loanData;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Loan name {id}</Title>
        {invested && <Invested>invested</Invested>}
      </TitleWrapper>
      <Content>
        <div>{title}</div>
        <Button onClick={handleInvest}>invest</Button>
      </Content>
    </Wrapper>
  );
};

export default Loan;
