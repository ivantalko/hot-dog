import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </nav>
  );
}
