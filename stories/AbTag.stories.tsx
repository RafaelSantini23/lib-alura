import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AbTag, IAbTag } from '../src';

export default {
  title: 'components/AbTag',
  component: AbTag,
} as ComponentMeta<typeof AbTag>;

// AA

const Template: ComponentStory<typeof AbTag> = args => <AbTag {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'default',
} as IAbTag;
