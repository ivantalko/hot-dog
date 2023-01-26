import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { RegisterLocationContainer } from 'components/RegisterForm/RegisterForm.styled';

export const LiItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const LiLabel = styled.label`
  width: 56px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #111111;
  margin-right: 10px;

  line-height: 19px;
  font-size: 14px;

  @media ${breakpoints.minTablet} {
    width: 83px;
    font-size: 18px;
    line-height: 25px;
    margin-right: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 30px;
  height: 30px;

  align-items: center;
  justify-content: center;
  background-color: #fdf7f2;
  border-radius: 50%;
  border: none;
`;

export const LiInput = styled.input`
  width: 170px;
  height: 24px;
  margin-right: 14px;
  padding-left: 12px;

  border: 1px solid transparent;
  font-weight: 400;
  letter-spacing: 0.04em;
  font-size: 14px;
  line-height: 19px;

  color: #111111;
  background-color: #ffffff;
  outline: none;

  ${({ active }) =>
    active &&
    `
        background-color: #fdf7f2;
        border: 1px solid rgba(245, 146, 86, 0.5);
        border-radius: 40px;
    `} @media ${breakpoints.minTablet} {
    height: 32px;
    width: 216px;
    font-size: 18px;
    line-height: 25px;
    margin-right: 24px;
  }
`;

export const LOCATIONWRAPPER = styled.div`
  position: relative;
`;

export const WRAPPER = styled.div`
  position: absolute;
  top: 72px;
  right: 105%;
`;

export const LocationDiv = styled(RegisterLocationContainer)`
  width: 298px;
  height: 65px;

  @media ${breakpoints.minTablet} {
    transform: translate(8px, -37px);
    width: 410px;

    height: 69px;
  }
  @media ${breakpoints.desktop} {
    transform: translate(8px, -40px);
    width: 408px;
    height: 200px;
  }
