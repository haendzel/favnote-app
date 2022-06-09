import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { fetchItems } from 'actions';

class Twitters extends Component {
  componentDidMount() {
    this.props.fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate pageType="twitters" data={twitters}>
        {twitters.map(({ title, content, twittersUrl, created, _id }) => (
          <Card
            _id={_id}
            cardType="twitters"
            title={title}
            content={content}
            twittersUrl={twittersUrl}
            created={created}
            key={_id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cardType: PropTypes.string,
      content: PropTypes.string.isRequired,
      created: PropTypes.string,
      twittersUrl: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

const mapDispatchToProps = dispatch => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
