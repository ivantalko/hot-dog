import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavStyled>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </AuthNavStyled>
  );
}
