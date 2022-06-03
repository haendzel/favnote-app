import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import { data } from '../data';

const Articles = () => (
  <GridTemplate pageType="articles">
    {data.articles.map(item => (
      <Card
        id={item.id}
        cardType="articles"
        title={item.title}
        content={item.content}
        articlesUrl={item.articlesUrl}
        createdDate={item.created}
        key={item.id}
      ></Card>
    ))}
  </GridTemplate>
);

export default Articles;
