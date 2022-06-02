import React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import Card from '../components/molecules/Card/Card';
import { data } from '../data';

const Articles = () => (
  <UserPageTemplate pageType="article">
    {data.articles.map(item => (
      <Card
        cardType="article"
        title={item.title}
        content={item.content}
        articleUrl={item.articleUrl}
        createdDate={item.created}
        key={item.title}
      ></Card>
    ))}
  </UserPageTemplate>
);

export default Articles;
