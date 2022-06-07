import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, twitterUrl, created, id }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        twitterUrl={twitterUrl}
        createdDate={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterUrl: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);
