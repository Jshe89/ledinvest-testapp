import styled from 'styled-components';
import palette from '../../styles/palette';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  color: ${palette.textColors.defaultColor};
  background-color: ${palette.bgColors.greyLighter};
  padding: 15px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  color: ${palette.textColors.defaultColor};
  text-transform: capitalize;
`;

export const TotalAmount = styled.div`
  width: fit-content;
  max-width: 80%;
  text-align: center;
  font-size: 14px;
  margin: 0 auto;
  padding: 10px 0;
`;
