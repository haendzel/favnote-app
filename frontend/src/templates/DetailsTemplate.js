import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';

const StyledHeader = styled.h1`
  &:first-letter {
    text-transform: uppercase;
  }
`;

const DetailsTemplate = ({ pageType }) => (
  <UserPageTemplate pageType={pageType}>
    <StyledHeader>{pageType}</StyledHeader>
    <p>
      Labore quis proident veniam laborum sit labore velit veniam ipsum fugiat laboris cupidatat in.
      Ullamco aute duis sunt ut eu nulla anim pariatur. Esse enim consectetur excepteur incididunt
      cupidatat incididunt nulla in ea velit quis. Est proident quis tempor sunt ipsum tempor
      consectetur anim mollit exercitation quis. Velit eu occaecat aliquip irure in non excepteur
      officia. Consectetur esse sunt aliqua sit aliqua et officia id nisi aliquip aliqua.
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};

export default DetailsTemplate;
