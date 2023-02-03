import React from 'react';
import {
  Container,
  ContainerButtons,
  ButtonStyle,
  Number,
  Title,
} from './styles';

export interface IAbCounter
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  value: number;
  onClick: (value?: number) => void;
}
export const AbCounter = ({ value = 0, onClick, ...props }: IAbCounter) => {
  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    onClick?.(value - 1);
  };

  const handleIncrement = () => {
    onClick?.(value + 1);
  };

  return (
    <Container>
      <Title>Quantidade</Title>
      <ContainerButtons>
        <ButtonStyle type="button" onClick={handleDecrement} {...props}>
          {' '}
          -{' '}
        </ButtonStyle>
        <Number> {value.toString().padStart(2, '0')} </Number>
        <ButtonStyle type="button" onClick={handleIncrement} {...props}>
          {' '}
          +{' '}
        </ButtonStyle>
      </ContainerButtons>
    </Container>
  );
};
