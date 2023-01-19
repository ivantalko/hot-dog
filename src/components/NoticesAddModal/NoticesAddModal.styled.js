import styled from 'styled-components';
import { ReactComponent as maleIconPrimal } from './img/male.svg';
import { ReactComponent as femaleIconPrimal } from './img/female.svg';
import { ReactComponent as iconPlusPrimal } from './img/iconPlus.svg';
import { ReactComponent as iconClosePrimal } from './img/closeIcon.svg';
import { breakpoints } from 'helpers/breakpoints';

export const MaleIcon = styled(maleIconPrimal)`
  width: 40px;
  height: 40px;
`;
export const FemaleIcon = styled(femaleIconPrimal)`
  height: 40px;
  width: 40px;
`;

export const Backdrop = styled.div`
  z-index: 1;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;
  align-items: center;
  display: flex;
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
  padding: 20px 20px 40px 20px;
`;
export const NextPageModal = styled.div`
  z-index: 2;
  background: #ffffff;
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: auto;
  position: relative;
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
    box-shadow: inset 0px 0px 4px #f59256;
    &::placeholder {
      color: #f59256;
    }
  }
`;

export const ControlsBtnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ControlsBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  cursor: pointer;
  background: transparent;
  border-radius: 40px;
  width: 100%;
  padding: 9px 0px;
  border: 2px solid #f59256;
  color: #111111;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #ffffff;
    background: #f59256;
  }
`;

export const SecondPageParameterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const SexList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 16px;
`;

export const TextArea = styled.textarea`
  cursor: pointer;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  height: 40px;
  padding: 12px 14px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: rgba(27, 27, 27, 0.6);
  resize: none;
  overflow: hidden;
  outline: none;
  transition: 250ms;
  &:hover,
  &:focus {
    border: 1px solid #f59256;
    color: #f59256;
    box-shadow: inset 0px 0px 4px #f59256;
  }
`;

export const SexText = styled.p`
  margin-top: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #000000;
  &.active {
    color: #f59256;
  }
`;

export const SexItem = styled.li`
  position: relative;
  cursor: pointer;
`;

export const SexInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 40px;
  height: 40px;
  left: 0;
  background-color: red;
  cursor: pointer;
`;

export const SecondPageParameterInput = styled.input`
  cursor: pointer;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  height: 40px;
  padding: 12px 14px;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: rgba(27, 27, 27, 0.6);
  transition: 250ms;
  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }
  &:hover,
  &:focus {
    border: 1px solid #f59256;
    color: #f59256;
    box-shadow: inset 0px 0px 4px #f59256;
    &::placeholder {
      color: #f59256;
    }
  }
`;

export const AvatarInputBox = styled.div`
  display: inline-flex;
  background: #fdf7f2;
  border-radius: 20px;
  position: relative;
  transition: 250ms;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px #f59256;
  }
`;

export const AvatarInput = styled.input`
  cursor: pointer;
    width: 116px;
    height: 116px;
    background-color: red;
    opacity: 0;
    border-radius: 20px;

}`;

export const IconPlus = styled(iconPlusPrimal)`
  position: absolute;
  top 50%;
  left 50%;
  transform: translate(-50%, -50%);
`;

export const ParameterItem = styled.li`
  &:nth-child(5) {
    margin-top: 12px;
  }
`;
