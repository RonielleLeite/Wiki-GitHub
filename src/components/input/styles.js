import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 80%;
  height: 62px;
  padding: 0 20px;
  background: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  color: #FFFFFF;
  font-size: 18px;

  &:focus {
    outline: none;
    border: 2px solid #61dafb;
  }
`;