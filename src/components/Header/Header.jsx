import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
  &:active {
    text-decoration: none;
    color: red;
  }
`;

export const Header = () => {
  return (
    <>
      Logo
      <NavLinkStyled to="news">___News___</NavLinkStyled>
      <NavLinkStyled to="notices/sell">___Find Pet___</NavLinkStyled>
      <NavLinkStyled to="friends">___Our friend___</NavLinkStyled>
      <NavLinkStyled to="login">Login</NavLinkStyled>
      <NavLinkStyled to="register">___Registration___</NavLinkStyled>
    </>
  );
};
