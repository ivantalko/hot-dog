import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UserNav() {
  return (
    <nav>
      <NavLink to="/user">Account</NavLink>
    </nav>
  );
}
