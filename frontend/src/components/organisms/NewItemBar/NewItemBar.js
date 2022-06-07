import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageType, isVisible }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageType}>
    <Heading big>Create new {pageType}</Heading>
    <Input placeholder={pageType === 'twitters' ? 'Twitter url' : 'title'} />
    {pageType === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activecolor={pageType}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

NewItemBar.defaultProps = {
  pageType: 'notes',
};

export default withContext(NewItemBar);