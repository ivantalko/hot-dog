import Logo from 'components/Header/Logo/Logo';
import React, { useState } from 'react';
import Navigation from 'components/Header/Navigation/Navigation';
import { HeaderStyled } from './Header.styled';
import BurgerBtn from 'components/Header/BurgerBtn/BurgerBtn';
import BurgerMenu from 'components/Header/BurgerMenu/BurgerMenu';

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handTogleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <HeaderStyled>
      <Logo />
      {!burgerMenu && (
        <Navigation burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      )}
      <BurgerBtn onClick={handTogleBurger} isOpen={burgerMenu} />
      {burgerMenu && (
        <BurgerMenu setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
      )}
    </HeaderStyled>
  );
}
