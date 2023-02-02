import React from 'react';
import { AbCard, TAbCard } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const template: ComponentStory<typeof AbCard> = args => (
  <AbCard>{args.children}</AbCard>
);

export const Card = template.bind({});
// asdasd

Card.args = {
  children: 'dsadas',
} as TAbCard;
