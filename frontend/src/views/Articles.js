import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    {articles.map(({ title, content, articlesUrl, created, id }) => (
      <Card
        id={id}
        cardType="articles"
        title={title}
        content={content}
        articlesUrl={articlesUrl}
        createdDate={created}
        key={id}
      ></Card>
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

Articles.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { articles } = state;
  console.log(state);
  return { articles };
};

export default connect(mapStateToProps)(Articles);
