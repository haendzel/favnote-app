import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import { data } from '../data';

const Notes = () => (
  <GridTemplate pageType="notes">
    {data.notes.map(item => (
      <Card
        id={item.id}
        cardType="notes"
        title={item.title}
        content={item.content}
        createdDate={item.created}
        key={item.id}
      ></Card>
    ))}
  </GridTemplate>
);

export default Notes;
