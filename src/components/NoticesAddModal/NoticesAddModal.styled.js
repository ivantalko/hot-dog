import styled from 'styled-components';
import { ReactComponent as maleIconPrimal } from './img/male.svg';
import { ReactComponent as femaleIconPrimal } from './img/female.svg';
import { ReactComponent as iconPlusPrimal } from './img/iconPlus.svg';
import { ReactComponent as iconClosePrimal } from './img/closeIcon.svg';
import { breakpoints } from 'helpers/breakpoints';

export const MaleIcon = styled(maleIconPrimal)``;
export const FemaleIcon = styled(femaleIconPrimal)``;
export const IconPlus = styled(iconPlusPrimal)``;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow: auto;
  padding: 20px 0px;
`;

export const IconClose = styled(iconClosePrimal)`
  cursor: pointer;
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  height: 34px;
  width: 34px;
  position: absolute;
  right: 20px;
  top: 20px;
  * {
    transition: 125ms;
    color: black;
    fill: black;
  }
  &:hover,
  &:focus {
    * {
      color: #f59256;
      fill: #f59256;
    }
  }
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px 20px 40px 20px;
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalTitleInfo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
  @media ${breakpoints.minTablet} {
    gap: 12px;
    margin-bottom: 28px;
  }
`;

export const CategoryBtn = styled.button`
  &:nth-of-type(1) {
    margin-bottom: 4px;
  }
  cursor: pointer;
  padding: 8px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: transparent;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #f59256;
    color: white;
  }
`;

export const ParameterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 40px;
`;

export const ParameterTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #000000;
  margin-bottom: 12px;
  @media ${breakpoints.minTablet} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const ParameterInput = styled.input`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;

  background-color: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 12px 14px;
  width: 100%;
  transition: 250ms;
  cursor: pointer;
  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }
  &:hover,
  &:focus {
    border: 1px solid #f59256;
    color: #f59256;
    box-shadow: inset 0px 0px 1px #f59256;
  }
`;

export const ControlsBtn = styled.button`
  background: #f59256;
  border-radius: 40px;
`;
