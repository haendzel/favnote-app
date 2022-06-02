import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import { data } from '../data';

const Notes = () => (
  <UserPageTemplate pageType="note">
    {data.notes.map(item => (
      <Card
        cardType="note"
        title={item.title}
        content={item.content}
        createdDate={item.created}
        key={item.title}
      ></Card>
    ))}
  </UserPageTemplate>
);

export default Notes;
