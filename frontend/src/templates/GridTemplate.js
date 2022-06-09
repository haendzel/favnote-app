import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';
import Input from '../components/atoms/Input/Input';
import Heading from '../components/atoms/Heading/Heading';
import Paragraph from '../components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';
import withContext from '../hoc/withContext';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  &:first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activecolor, theme }) => theme[activecolor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 10000;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  toggleNewItemBar = () => {
    this.setState(prevState => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { children, pageType, data } = this.props;
    const { isNewItemBarVisible } = this.state;

    return (
      <UserPageTemplate pageType={pageType}>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="Search" />

            <StyledHeading big as="h1">
              {pageType}
            </StyledHeading>

            <StyledParagraph>
              {data.length} {pageType}
            </StyledParagraph>
          </StyledPageHeader>
          <StyledGrid>{children}</StyledGrid>
          <StyledButtonIcon
            icon={plusIcon}
            activecolor={pageType}
            onClick={this.toggleNewItemBar}
          />
          <NewItemBar
            isVisible={isNewItemBarVisible}
            pageType={pageType}
            handleClose={this.toggleNewItemBar}
          />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};

export default withContext(GridTemplate);
