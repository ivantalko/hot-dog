import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserNavStyled } from './UserNav.styled';

export default function UserNav() {
  return (
    <UserNavStyled>
      <NavLink to="/user">Account</NavLink>
    </UserNavStyled>
  );
}
