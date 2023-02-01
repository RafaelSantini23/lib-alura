import styled, { css } from 'styled-components';
import { IbBotaoProps } from '.';

export const BotaoEstilizado = styled.button<IbBotaoProps>`
  background: ${({ color }) => (color === 'primary' ? '#eb9b00' : '#FFF')};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${({ color }) => (color === 'primary' ? '#FFF' : '#eb9b00')};
  font-size: 20px;
  cursor: pointer;
  ${({ color }) =>
    color === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border-color: #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border-color: #b87900;
            color: #b87900;
          }
        `}
`;
