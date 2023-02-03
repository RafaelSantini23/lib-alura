import React, { useState } from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCounter } from '../src';

export default {
  title: 'components/AbCounter',
  component: AbCounter,
} as ComponentMeta<typeof AbCounter>;

const Template: ComponentStory<typeof AbCounter> = args => {
  const [value, setValue] = useState(100);
  return (
    <AbCounter
      {...args}
      value={value}
      onClick={value => setValue(value as number)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};
