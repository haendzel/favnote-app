import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import { data } from '../data';

const Twitters = () => (
  <GridTemplate pageType="twitters">
    {data.twitters.map(item => (
      <Card
        id={item.id}
        cardType="twitters"
        title={item.title}
        content={item.content}
        twittersName={item.twittersName}
        createdDate={item.created}
        key={item.id}
      ></Card>
    ))}
  </GridTemplate>
);

export default Twitters;
