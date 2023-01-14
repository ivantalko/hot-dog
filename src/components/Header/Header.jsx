import Logo from 'components/Logo/Logo';
import React from 'react';
import Navigation from 'components/Navigation/Navigation';

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}
