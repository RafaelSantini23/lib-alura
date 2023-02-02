import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao, IAbBotaoProps } from '../src';

export default {
  title: 'Components/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = args => <AbBotao {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Button Primary',
} as IAbBotaoProps;

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Button Secondary',
  color: 'secondary',
} as IAbBotaoProps;
