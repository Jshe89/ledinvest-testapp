import styled from 'styled-components';
import palette from '../../styles/palette';

export const Button = styled.button`
  border: 1px solid ${palette.bgColors.yellowDark};
  background: ${palette.bgColors.yellow};
  text-transform: uppercase;
  color: ${palette.textColors.defaultColor};
  padding: 10px 25px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: ${palette.bgColors.yellowDark};
    font-weight: bold;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
