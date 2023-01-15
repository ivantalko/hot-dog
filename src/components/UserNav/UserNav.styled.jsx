import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AccountStyled = styled(NavLink)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 164px;
  height: 35px;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 36px;
  padding-right: 36px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  margin-top: 46px;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration: none;

  color: #ffffff;
  background-color: #f59256;

  @media ${breakpoints.minTablet} {
    height: 44px;
    font-size: 16px;
    line-height: 22px;

    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 28px;
    padding-right: 28px;

    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const SvgAccount = styled.svg`
  width: 20px;
  height: 20px;

  @media ${breakpoints.minTablet} {
    width: 28px;
    height: 28px;
  }
`;
