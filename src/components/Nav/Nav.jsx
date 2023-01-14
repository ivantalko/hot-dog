import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavStyled } from './Nav.styled';

export default function Nav() {
  return (
    <NavStyled>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices/sell">Find Pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </NavStyled>
  );
}
