import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';
import { fetchItems } from '../actions';

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate pageType="articles" data={articles}>
        {articles.map(({ title, content, articleUrl, created, _id }) => (
          <Card
            _id={_id}
            cardType="articles"
            title={title}
            content={content}
            articleUrl={articleUrl}
            created={created}
            key={_id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cardType: PropTypes.string,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
