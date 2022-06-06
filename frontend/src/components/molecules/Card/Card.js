import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import LinkIcon from '../../../assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem } from 'actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 385px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      flex: 1;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 50%;
  background-position: 50% 50%;
  position: absolute;
  right: 20px;
  top: 20px;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const {
      id,
      cardType,
      title,
      createdDate,
      twittersUrl,
      articlesUrl,
      content,
      removeItem,
    } = this.props;

    if (this.state.redirect) {
      return <Navigate to={`/${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{createdDate}</DateInfo>
          {cardType === 'twitters' && <StyledAvatar src={twittersUrl} />}
          {cardType === 'articles' && <StyledLinkButton href={articlesUrl} />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(cardType, id)} secondary>
            Remove
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  twittersUrl: PropTypes.string.isRequired,
  articlesUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twittersUrl: 'https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg',
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => dispatch(removeItem(itemType, id)),
});

export default connect(null, mapDispatchToProps)(Card);
