import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Molecules/Card', module)
  .add('notes', () => <Card cardType="notes" />)
  .add('twitters', () => <Card cardType="twitters" />)
  .add('articles', () => <Card cardType="articles" />);
