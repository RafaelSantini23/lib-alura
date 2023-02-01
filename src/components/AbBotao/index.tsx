import React from 'react';
import { BotaoEstilizado } from './styles';

export interface IbBotaoProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const AbBotao = ({
  text,
  color = 'primary',
  onClick,
  ...props
}: IbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} color={color} {...props}>
      {text}
    </BotaoEstilizado>
  );
};
