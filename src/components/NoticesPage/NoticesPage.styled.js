import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIconPrimal } from './img/searchIcon.svg';
import { ReactComponent as CloseIconPrimal } from './img/closeIcon.svg';

export const Section = styled.section`
  padding: 0px 20px 100px;
  @media ${breakpoints.minTablet} {
    padding: 0px 32px 100px;
  }
  @media ${breakpoints.desktop} {
    padding: 0px 16px 200px;
  }
`;

export const SearchIcon = styled(SearchIconPrimal)`
  height: 20px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;
export const CloseIcon = styled(CloseIconPrimal)`
  height: 20px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;

  margin-bottom: 28px;
  @media ${breakpoints.minTablet} {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }
`;

export const SearchForm = styled.form`
  border-radius: 20px;
  position: relative;
  width: auto;
  margin-bottom: 28px;
  @media ${breakpoints.minTablet} {
    width: max-content;
    margin: auto;
    margin-bottom: 40px;
  }
`;

export const SearchInput = styled.input`
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  padding-left: 12px;
  border: 2px solid transparent;
  color: #535353;
  @media ${breakpoints.minTablet} {
    width: 608px;
  }
  &::placeholder {
    color: #535353;
    transition: 250ms;
  }
  transition: 250ms;
  &:hover,
  &:focus {
    color: #f59256;
    border: 2px solid #f59256;
    border-color: #f59256;
    &::placeholder {
      color: #f59256;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  color: black;
  height: 100%;
  width: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #f59256;
    fill: #f59256;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  flex: none;
  order: 0;
  flex-grow: 0;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
