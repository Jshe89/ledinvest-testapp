import styled from 'styled-components';
import palette from '../../styles/palette';

export const Wrapper = styled.div`
  background-color: ${palette.bgColors.white};
  border: 1px solid ${palette.bgColors.greyDark};
  padding: 10px 15px;
  margin: 0 0 15px 0;
  &:last-child {
    margin: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: ${palette.textColors.defaultColor};
  text-transform: capitalize;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Invested = styled.div`
  color: ${palette.textColors.green};
`;
