import styled, { css } from 'styled-components';

const Button = styled.button`
  //background-color: #ffd82b;
  background-color: ${({theme}) => theme.primary};
  border: none;
  width: 220px;
  height: 47px;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({secondary}) => (
    secondary && css `
      background-color: ${({theme}) => theme.grey200};
      width: ${({width}) => width || '105px'};
      height: 30px;
      font-size: 10px;
    `
  )}

  ${({tertiary}) => (
      tertiary && css `
        background-color: ${({theme}) => theme.tertiary};
      `
  )}
 `;

export default Button;
