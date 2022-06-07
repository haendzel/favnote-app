import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import withContext from 'hoc/withContext';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.array.isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default withContext(UserPageTemplate);
