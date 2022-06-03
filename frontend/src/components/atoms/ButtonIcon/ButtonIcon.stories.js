import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import penIcon from 'assets/icons/pen.svg';
import twittersIcon from 'assets/icons/twitters.svg';
import plusIcon from 'assets/icons/plus.svg';
import logoutIcon from 'assets/icons/logout.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.primary};
`;

storiesOf('ButtonIcon', module)
  .add('Bulb', () => (
    <YellowBackground>
      <ButtonIcon icon={bulbIcon} />
    </YellowBackground>
  ))
  .add('Active', () => (
    <YellowBackground>
      <ButtonIcon active icon={bulbIcon} />
    </YellowBackground>
  ))
  .add('Pen', () => (
    <YellowBackground>
      <ButtonIcon icon={penIcon} />
    </YellowBackground>
  ))
  .add('twitters', () => (
    <YellowBackground>
      <ButtonIcon icon={twittersIcon} />
    </YellowBackground>
  ))
  .add('Plus', () => (
    <YellowBackground>
      <ButtonIcon icon={plusIcon} />
    </YellowBackground>
  ))
  .add('Logout', () => (
    <YellowBackground>
      <ButtonIcon icon={logoutIcon} />
    </YellowBackground>
  ));
