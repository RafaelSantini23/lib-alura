import React from 'react';
import { Tag } from './styles';

export interface IAbTag extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
}
export const AbTag = ({ text, ...props }: IAbTag) => {
  return <Tag {...props}>{text}</Tag>;
};
