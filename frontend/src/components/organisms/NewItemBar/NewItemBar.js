import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

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
  width: 100%;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
  width: 100%;
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const NewItemBar = ({ pageType, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageType}>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twittersUrl: '', created: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        addItem(pageType, values);
        handleClose();
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Heading big>Create new {pageType}</Heading>
          <StyledInput
            as={Field}
            type="text"
            value={pageType === 'twitters' ? values.twittersUrl : values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            name={pageType === 'twitters' ? 'twittersUrl' : 'title'}
            placeholder={pageType === 'twitters' ? 'Twitter url' : 'title'}
          />
          {pageType === 'articles' && (
            <StyledInput
              placeholder="link"
              as={Field}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.articleUrl}
              type="text"
              name="articleUrl"
            />
          )}
          <StyledTextArea
            as="textarea"
            name="content"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            value={values.content}
          />
          <Button disabled={isSubmitting} type="submit " activecolor={pageType}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageType: 'notes',
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
