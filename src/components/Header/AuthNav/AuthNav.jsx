import React from 'react';
import { AuthNavStyled, LoginStyled, RegisterStyled } from './AuthNav.styled';

export default function AuthNav({ setBurgerMenu }) {
  return (
    <AuthNavStyled>
      <LoginStyled
        to="/login"
        onClick={() => {
          setBurgerMenu(false);
        }}
      >
        Login
      </LoginStyled>
      <RegisterStyled
        to="/register"
        onClick={() => {
          setBurgerMenu(false);
        }}
      >
        Registration
      </RegisterStyled>
    </AuthNavStyled>
  );
}
