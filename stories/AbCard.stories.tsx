import React from 'react';
import { AbCard } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

const template: ComponentStory<typeof AbCard> = () => (
  <AbCard>
    <h1>Olá, eu sou um card</h1>
  </AbCard>
);

export const Card = template.bind({});
