import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, twitterName, created, id }) => (
      <Card
        id={id}
        cardType="notes"
        title={title}
        content={content}
        twitterName={twitterName}
        createdDate={created}
        key={id}
      ></Card>
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cardType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    twitterName: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
  }),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);
