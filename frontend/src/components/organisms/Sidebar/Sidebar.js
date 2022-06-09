import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import penIcon from '../../../assets/icons/pen.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import logo from '../../../assets/icons/logo.svg';

const SidebarNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const BrandLink = styled.a`
  display: block;
  background-image: url(${logo});
  background-position: 50% 50%;
  background-size: 70%;
  height: 67px;
  width: 67px;
  background-repeat: no-repeat;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
`;

const Sidebar = ({ pageType }) => (
  <SidebarNav activeColor={pageType}>
    <Nav>
      <BrandLink href="/" />
      <NavButtons>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </NavButtons>
    </Nav>
    <ButtonIcon icon={logoutIcon} as={NavLink} to="/login" />
  </SidebarNav>
);

export default Sidebar;
