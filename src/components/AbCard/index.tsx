import React, { FunctionComponent } from 'react';
import { CardContainer } from './styles';

export type TAbCard = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const AbCard: FunctionComponent<TAbCard> = ({ children, ...props }) => {
  return <CardContainer {...props}>{children}</CardContainer>;
};
