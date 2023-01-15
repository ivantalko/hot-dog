import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${breakpoints.minTablet} {
    margin-top: 88px;
  }

  @media ${breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-top: 0;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  color: #181c27;

  :hover,
  :focus,
  :active {
    font-weight: 700;
    color: #f59256;
    text-decoration: underline;
  }

  @media ${breakpoints.minTablet} {
    font-size: 48px;
    line-height: 66px;
  }

  @media ${breakpoints.desktop} {
    font-size: 20px;
    line-height: 27px;
  }
`;
