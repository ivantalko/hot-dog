import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../../helpers/breakpoints';

export const AuthNavStyled = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  margin-top: 46px;

  @media ${breakpoints.minTablet} {
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 246px;
  }
  @media ${breakpoints.desktop} {
    margin-left: 351px;
  }
`;

export const LoginStyled = styled(NavLink)`
  box-sizing: border-box;
  display: inline-block;
  width: 95px;
  height: 35px;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 28px;
  padding-right: 28px;

  margin-right: 12px;

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
    width: 111px;
    height: 44px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    line-height: 27px;
  }
  @media ${breakpoints.desktop} {
    height: 47px;
  }
`;

export const RegisterStyled = styled(NavLink)`
  box-sizing: border-box;
  display: inline-block;
  width: 144px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 28px;
  padding-right: 28px;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration: none;

  color: #111111;
  background: #ffffff;

  @media ${breakpoints.minTablet} {
    width: 181px;
    height: 44px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 20px;
    line-height: 27px;
  }
  @media ${breakpoints.desktop} {
    height: 47px;
  }
`;
