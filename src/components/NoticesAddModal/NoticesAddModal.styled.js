import styled from 'styled-components';
import { ReactComponent as maleIconPrimal } from './img/male.svg';
import { ReactComponent as femaleIconPrimal } from './img/female.svg';
import { ReactComponent as iconPlusPrimal } from './img/iconPlus.svg';
import { ReactComponent as iconClosePrimal } from './img/iconPlus.svg';

export const MaleIcon = styled(maleIconPrimal)``;
export const FemaleIcon = styled(femaleIconPrimal)``;
export const IconPlus = styled(iconPlusPrimal)``;
export const IconClose = styled(iconClosePrimal)``;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
