import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbTextField, IAbTextField } from '../src';

export default {
  title: 'components/AbTextField',
  component: AbTextField,
} as ComponentMeta<typeof AbTextField>;

const Template: ComponentStory<typeof AbTextField> = args => (
  <AbTextField {...args} />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: 'seuemail@maneiro.com',
  field: 'E-mail',
  id: 'email',
} as IAbTextField;

export const WithValue = Template.bind({});

WithValue.args = {
  placeholder: 'seuemail@maneiro.com',
  field: 'E-mail',
  id: 'email',
  value: 'valor',
};
