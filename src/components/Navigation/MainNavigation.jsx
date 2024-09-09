import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import { HiMiniBars3 } from 'react-icons/hi2';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import { useState } from 'react';
import Backdrop from '../UIElements/Backdrop';
import styled from 'styled-components';

// Define styled-components
const MenuButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;
  color: var(--white-color);

  @media (min-width: 768px) {
    display: none;
  }
`;

const TitleContainer = styled.div`
  color: white;
  width: 500px;
  height: 90%;
  margin-top: 7px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const HeaderNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
    z-index: 3;
  }
`;

const DrawerNav = styled.nav`
  height: 100%;
  background: var(--greyColor)
`;

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop closeDrawerHandler={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} closeDrawerHandler={closeDrawerHandler}>
        <DrawerNav>
          <NavLinks />
        </DrawerNav>
      </SideDrawer>

      <MainHeader>
        <MenuButton onClick={openDrawerHandler}>
          <HiMiniBars3 />
        </MenuButton>

        <TitleContainer>
          <Link to="/">
            <img src="logo.png" className="App-logo" alt="logo" />
          </Link>
        </TitleContainer>

        <HeaderNav>
        </HeaderNav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;