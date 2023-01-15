import React from 'react';
import { NavLinkStyled, NavStyled } from './Nav.styled';

export default function Nav() {
  return (
    <NavStyled>
      <NavLinkStyled to="/news">News</NavLinkStyled>
      <NavLinkStyled to="/notices/sell">Find Pet</NavLinkStyled>
      <NavLinkStyled to="/friends">Our friends</NavLinkStyled>
    </NavStyled>
  );
}
