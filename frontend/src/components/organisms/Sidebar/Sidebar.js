import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon'
import bulbIcon from '../../../assets/icons/bulb.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import logo from '../../../assets/icons/logo.svg';

const SidebarNav = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    padding: 25px 0;
    background-color: ${({activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
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
                <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="is-active" />
                <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="is-active" />
                <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="is-active" />
            </NavButtons>
        </Nav>
        <ButtonIcon icon={logoutIcon} />
    </SidebarNav>

);

export default Sidebar;