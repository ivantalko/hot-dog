import { breakpoints } from 'helpers/breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FormList = styled.div`
  @media ${breakpoints.minTablet} {
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;

    width: 608px;
    padding: 60px 80px 40px 80px;
  }

  @media ${breakpoints.desktop} {
    width: 618px;
    padding: 60px 80px;
  }
`;
export const TitleLoginForm = styled.h1`
  display: flex;
  justify-content: center;

  margin-bottom: 40px;

  font-family: 'Manrope';
  font-style: normal;

  color: #111111;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;

  letter-spacing: 0.04em;

  @media ${breakpoints.minTablet} {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.36;
  }
`;
export const InputLoginForm = styled.input`
  width: 280px;
  height: 40px;

  padding-left: 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  color: rgba(17, 17, 17, 0.6);

  &:hover,
  &:focus {
    color: #ff6101;
    outline: 1px solid #ff6101;
  }
  @media ${breakpoints.minTablet} {
    width: 448px;
    height: 52px;

    padding-left: 32px;
  }
  @media ${breakpoints.desktop} {
    width: 458px;
  }
`;
export const LoginForma = styled.form`
  @media ${breakpoints.mobile} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input:nth-last-child(even) {
    margin-bottom: 40px;
  }
  input:first-child {
    margin-bottom: 16px;
  }
`;

export const TextLoginForm = styled.p`
  display: flex;
  justify-content: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;

  font-size: 12px;
  line-height: 1.33;

  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
`;
export const LinkLoginForm = styled(NavLink)`
  color: #3091eb;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff6101;
    transform: scale(1.1);
  }
`;
export const MobileContainer = styled.div`
  @media ${breakpoints.mobile} {
    display: flex;
    justify-content: center;
  }
`;
