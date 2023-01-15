import Nav from 'components/Header/Nav/Nav';
import UserNav from 'components/Header/UserNav/UserNav';
import AuthNav from 'components/Header/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import React from 'react';
import { AuthNavStyled, BurgerOverlay } from './BurgerMenu.styled';

export default function BurgerMenu() {
  const token = useSelector(getToken);

  return (
    <BurgerOverlay>
      <AuthNavStyled>{token ? <UserNav /> : <AuthNav />}</AuthNavStyled>
      <Nav />
    </BurgerOverlay>
  );
}
