import React from 'react';
import { AuthNavStyled, LoginStyled, RegisterStyled } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavStyled>
      <LoginStyled to="/login">Login</LoginStyled>
      <RegisterStyled to="/register">Registration</RegisterStyled>
    </AuthNavStyled>
  );
}
