import React from 'react';
import { NavLinkStyled, NavStyled } from './Nav.styled';

export default function Nav({ setBurgerMenu, burgerMenu }) {
  return (
    <>
      <NavStyled>
        <NavLinkStyled
          to="/news"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          News
        </NavLinkStyled>

        <NavLinkStyled
          to="/notices/sell"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          Find Pet
        </NavLinkStyled>
        <NavLinkStyled
          to="/friends"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          Our friends
        </NavLinkStyled>
      </NavStyled>
    </>
  );
}
