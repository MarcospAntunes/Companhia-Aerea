
import styled, { css } from 'styled-components';

  const Button = styled.button`

    border: none;
    border-radius: 5px;
    padding: 13px;
    cursor: pointer;
    color: black;
    margin-right: 10px;
    transition: 0.2s;
    
    &:hover {
      padding: 16px;
      transition: 0.2s;
    }

${props => props.$azul && css`
    background-color: #183CFA;
    color: white;
    
  `}
 ${props => props.$botoesHeader && css`
    @media screen and (max-width: 752px) {
    display: none;
    } 
 `}
`;

  const Div = styled.div`
  border: none;
    border-radius: 5px;
    padding: 13px;
    margin-right: 10px;
    cursor: pointer;
`;

export {Button, Div}

