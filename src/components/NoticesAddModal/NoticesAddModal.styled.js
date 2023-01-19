import styled from 'styled-components';
import { ReactComponent as maleIconPrimal } from './img/male.svg';
import { ReactComponent as femaleIconPrimal } from './img/female.svg';
import { ReactComponent as iconPlusPrimal } from './img/iconPlus.svg';
import { ReactComponent as iconClosePrimal } from './img/closeIcon.svg';

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
`;

export const IconClose = styled(iconClosePrimal)`
  background: #fdf7f2;
  backdrop-filter: blur(2px);
  border-radius: 50%;
  height: 34px;
  width: 34px;
  position: absolute;
  right: 20px;
  top: 20px;
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
