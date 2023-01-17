import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SearchIconPrimal } from './img/searchIcon.svg';
import { ReactComponent as CloseIconPrimal } from './img/closeIcon.svg';
import { ReactComponent as AddIconPrimal } from './img/addIcon.svg';

export const Section = styled.section`
  max-width: 1280px;
  margin: auto;
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

export const NavBox = styled.div`
  position: relative;
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

export const NavItem = styled.li`
  &:focus,
  &:hover {
    box-shadow: 0px 0px 4px black;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.04em;F
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

`;

export const AddIcon = styled(AddIconPrimal)`
  color: inherit;
  fill: inherit;
  height: 32px;
  width: 32px;
  @media ${breakpoints.minTablet} {
    height: 24px;
    width: 24px;
    display: flex;
    margin: auto;
  }
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const AddBtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  flex-direction: column-reverse;
  background: #f59256;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 50%;

  justify-content: center;
  position: fixed;
  bottom: 92px;
  right: 20px;
  cursor: pointer;
  transition: 250ms;
  @media ${breakpoints.minTablet} {
    position: absolute;
    flex-direction: row;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    right: 0px;
    width: auto;
    height: auto;
    bottom: auto;
    top: 140px;
    transform: translateY(100%);
    cursor: default;
  }
  @media ${breakpoints.desktop} {
    top: 185px;
    bottom: auto;
    transform: translateY(0);
  }
  &:hover,
  &:focus {
    @media ${breakpoints.maxMobile}  {
      box-shadow: 0px 0px 4px black;
     
  }
`;

export const AddBtnText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  @media ${breakpoints.minTablet} {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #111111;
  }
`;

export const AddBtn = styled.button`
  color: white;
  fill: white;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: 250ms;
  @media ${breakpoints.minTablet} {
    margin-left: 12px;
    width: 44px;
    height: 44px;
    background-color: #f59256;
    border-radius: 50%;
    &:hover,
    &:focus {
      box-shadow: 0px 0px 4px grey;
    }
  }
`;
