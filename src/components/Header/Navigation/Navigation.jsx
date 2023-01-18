import React from 'react';
import Nav from 'components/Header/Nav/Nav';
import UserNav from 'components/Header/UserNav/UserNav';
import AuthNav from 'components/Header/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import { NavigationStyled, NavStyled } from './Navigation.styled';

export default function Navigation({ setBurgerMenu }) {
  const token = useSelector(getToken);

  return (
    <NavigationStyled>
      <NavStyled>
        <Nav setBurgerMenu={setBurgerMenu} />
      </NavStyled>
      {token ? <UserNav /> : <AuthNav />}
    </NavigationStyled>
  );
}
