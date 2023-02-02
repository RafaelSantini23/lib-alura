import React from 'react';
import { BotaoEstilizado } from './styles';

export interface IAbBotaoProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const AbBotao = ({
  text,
  color = 'primary',
  onClick,
  ...props
}: IAbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} color={color} {...props}>
      {text}
    </BotaoEstilizado>
  );
};
