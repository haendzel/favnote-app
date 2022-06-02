import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import LinkIcon from '../../../assets/icons/link.svg';

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
  border: 5px solid ${({ theme }) => theme.twitter};
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

const Card = ({ cardType, title, createdDate, twitterUrl, articleUrl, content }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{createdDate}</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src={twitterUrl} />}
      {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  title: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterUrl: 'https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg',
};

export default Card;
