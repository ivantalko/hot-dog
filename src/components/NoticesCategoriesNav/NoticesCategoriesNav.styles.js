import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  @media screen and (min-width: 440px) {
    width: 400px;
  }
  @media ${breakpoints.desktop} {
    width: auto;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding: 10px 28px;

  &.active {
    background-color: #f59256;
    color: white;
  }
  &:hover,
  &:focus {
    background-color: #f59256a8;
  }
`;

export const NavItem = styled.li``;
