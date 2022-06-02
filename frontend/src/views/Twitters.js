import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import { data } from '../data';

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    {data.twitters.map(item => (
      <Card
        cardType="twitter"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        createdDate={item.created}
        key={item.title}
      ></Card>
    ))}
  </UserPageTemplate>
);

export default Twitters;
