import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/notices">Find Pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </nav>
  );
}
