import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import React from 'react';
import { BurgerOverlay } from './BurgerMenu.styled';

export default function BurgerMenu() {
  const token = useSelector(getToken);

  return (
    <BurgerOverlay>
      {token ? <UserNav /> : <AuthNav />}
      <Nav />
    </BurgerOverlay>
  );
}
