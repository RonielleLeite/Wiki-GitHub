import styled from 'styled-components';

export const StyledButton = styled.button`
  width:60%;     /* menor que o input */
  height: 62px;   /* mesma altura do input */
  padding: 0 20px;
  margin: 0 auto; /* centraliza horizontalmente */
  text-align: center;
  border-radius: 20px;
  font-size: 18px;
  background: #FFFFFF;
  color: #0d1117;
  cursor: pointer;
  border: none;

  &:hover {
    background: #61dafb;
    color: #0d1117;
    transition: 0.3s;
  }
`;