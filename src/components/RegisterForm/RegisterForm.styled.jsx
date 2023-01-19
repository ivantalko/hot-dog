import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import password from 'helpers/logAndReg/password.png';
import see from 'helpers/logAndReg/see.png';

export const RegisterContainer = styled.div`
  @media ${breakpoints.minTablet} {
    position: relative;
    width: 608px;
    height: 566px;
    padding: 60px 80px 40px 80px;

    background: #ffffff;

    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media ${breakpoints.desktop} {
    padding: 60px 80px;
    width: 618px;
    height: 562px;
  }
`;
export const TitleRegisterForm = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;

  color: #111111;
  font-size: 24px;
  line-height: 1.37;
  letter-spacing: 0.04em;

  @media ${breakpoints.minTablet} {
    font-weight: 500;
    font-size: 36px;
    line-height: 1.36;
  }
`;
export const InputRegisterForm = styled.input`
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
    background: #fdf7f2;
  }
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  @media ${breakpoints.minTablet} {
    width: 448px;
    height: 52px;

    padding-left: 32px;

    font-size: 18px;
    line-height: 1.38;
  }
  @media ${breakpoints.desktop} {
    width: 458px;
  }
`;

export const RegisterForma = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 16px;
`;
export const InputRegisterFormConfirm = styled.input`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  width: 280px;
  height: 40px;

  padding-left: 14px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  color: rgba(17, 17, 17, 0.6);

  margin-bottom: 40px;

  &:hover,
  &:focus {
    color: #ff6101;
    outline: 1px solid #ff6101;
    background: #fdf7f2;
  }

  @media ${breakpoints.minTablet} {
    width: 448px;
    height: 52px;
    font-size: 18px;

    padding-left: 32px;
  }
  @media ${breakpoints.desktop} {
    width: 458px;
  }
`;

export const TextRegisterForm = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
`;
export const LinkRegisterForm = styled(NavLink)`
  color: #3091eb;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff6101;
    transform: scale(1.1);
  }
`;
export const RegisterButton = styled.button`
  width: 280px;
  height: 44px;

  padding: 8px 25px;

  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);

  color: ${({ disabled }) => (disabled ? '#0c0c0c' : '#ffffff')};
  background: ${({ disabled }) => (disabled ? '#ffffff' : '#f59256')};

  &:hover,
  &:focus {
    background: #ffffff;
    border: 2px solid #f59256;
    color: #000000;
  }

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  display: flex;
  justify-content: center;
  letter-spacing: 0.04em;

  cursor: pointer;
  @media ${breakpoints.minTablet} {
    padding: 10px 28px;
    width: 448px;
  }
  @media ${breakpoints.desktop} {
    width: 458px;
    height: 48px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;
export const ValidationContainerPassword = styled.div`
  position: absolute;
  transform: translate(0px, -118px);

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 1.33;

  padding: 6px;
  background-color: #ffffffff;

  border: 1px solid red;
  border-radius: 40px;
  @media ${breakpoints.minTablet} {
    transform: translate(90px, -123px);
    paddding: 10px;
  }

  @media ${breakpoints.desktop} {
    transform: translate(90px, -126px);
  }
`;
export const ValidationContainerEmail = styled.div`
  position: absolute;
  transform: translate(53px, -178px);

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 1.33;

  border: 1px solid red;
  border-radius: 40px;

  background-color: #ffffffff;
  padding: 10px;
  @media ${breakpoints.minTablet} {
    transform: translate(128px, -196px);
  }
  @media ${breakpoints.desktop} {
    transform: translate(140px, -198px);
  }
`;
export const ValidationContainerPhone = styled.div`
  position: absolute;
  transform: translate(19px, -72px);

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 1.33;

  padding: 6px;
  background-color: #ffffffff;

  border: 1px solid red;
  border-radius: 40px;
  @media ${breakpoints.minTablet} {
    transform: translate(94px, -69px);
    padding: 10px;
  }

  @media ${breakpoints.desktop} {
    transform: translate(89px, -75px);
  }
`;

export const RegisterLocationContainer = styled.ul`
  position: absolute;

  transform: translate(3px, -44px);

  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgba(245, 146, 86, 0.5);

  overflow: scroll;

  width: 278px;
  height: 66px;
  @media ${breakpoints.minTablet} {
    transform: translate(8px, -37px);
    width: 430px;
    height: 69px;
  }
  @media ${breakpoints.desktop} {
    transform: translate(8px, -40px);
    width: 444px;

    gap: 2px;
  }
`;
export const RegisterButtonLocation = styled.button`
  cursor: pointer;

  border: none;
  padding: 5px;

  background-color: #ffffff;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #fdf7f2;
    color: #f59256;
  }
  @media ${breakpoints.minTablet} {
    padding: 2px;
  }
`;
export const NotSeePassword = styled.div`
  position: absolute;
  transform: translate(234px, -86px);
  width: 17px;
  height: 17px;

  background-image: url(${password});
  background-size: cover;
  transition: opacity 300ms linear;
  opacity: 1;
  &.active {
    opacity: 1;
  }
  @media ${breakpoints.minTablet} {
    transform: translate(389px, -87px);
    width: 25px;
    height: 25px;
  }
`;
export const SeePassword = styled.div`
  position: absolute;
  transform: translate(234px, -86px);
  width: 17px;
  height: 17px;

  background-image: url(${see});
  background-size: cover;
  transition: opacity 300ms linear;
  opacity: 0;
  &.active {
    opacity: 1;
  }
  @media ${breakpoints.minTablet} {
    transform: translate(389px, -87px);
    width: 25px;
    height: 25px;
  }
`;
