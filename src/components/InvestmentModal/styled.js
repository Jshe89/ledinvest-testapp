import styled from 'styled-components';
import palette from '../../styles/palette';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.bgColors.black};
  opacity: 0.7;
`;

export const Container = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${palette.textColors.defaultColor};
  width: 270px;
  background: ${palette.bgColors.white};
  padding: 20px;
  z-index: 11;
  &:focus {
    outline: none;
  }
`;

export const ModalHeader = styled.h2`
  color: ${palette.textColors.defaultColor};
  text-transform: capitalize;
  margin: 0 0 15px 0;
`;

export const ModalBody = styled.div`
  margin: 0 0 10px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 50px;
`;

export const Input = styled.input`
  border: 1px solid ${props => (props.isError ? palette.textColors.red : palette.bgColors.greyDark)};
  height: 35px;
  text-align: right;
  padding: 0 5px;
  outline: none;
`;

export const InputWrapper = styled.div`
  width: 100%;
  /* margin-right: 10px; */
`;

export const Error = styled.div`
  color: ${palette.textColors.red};
  font-size: 13px;
`;
