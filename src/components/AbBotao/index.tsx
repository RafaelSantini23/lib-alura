import React from 'react';
import { BotaoEstilizado } from './styles';

export interface AbBotaoProps {
  text?: string;
  color?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const AbBotao = ({ text, color = 'primary', onClick }: AbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} color={color}>
      {text}
    </BotaoEstilizado>
  );
};
