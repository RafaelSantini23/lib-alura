import React from 'react';
import { ContainerInput, Field, TextField } from './styles';

export interface IAbTextField extends React.HTMLAttributes<HTMLInputElement> {
  field?: string;
}
export const AbTextField = ({ field, id, ...props }: IAbTextField) => {
  return (
    <ContainerInput>
      <Field htmlFor={id}>{field}</Field>
      <TextField id={id} {...props} />
    </ContainerInput>
  );
};
