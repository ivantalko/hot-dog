import React from 'react';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import { NavigationStyled } from './Navigation.styled';

export default function Navigation() {
  const token = useSelector(getToken);

  return (
    <NavigationStyled>
      <Nav />
      {token ? <UserNav /> : <AuthNav />}
    </NavigationStyled>
  );
}
