import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as iconClosePrimal } from '../NoticesAddModal/img/closeIcon.svg';
import { ReactComponent as iconPlusPrimal } from '../NoticesAddModal/img/iconPlus.svg';
import { ReactComponent as maleIconPrimal } from '../NoticesAddModal/img/male.svg';
import { ReactComponent as femaleIconPrimal } from '../NoticesAddModal/img/female.svg';

export const NextPageModal = styled.div`
  &.hidden {
    display: none;
    position: absolute;
  }
  z-index: 2;
  background: #ffffff;
  border-radius: 20px;
  width: calc(100% - 40px);
  margin: auto;
  position: relative;
  padding: 20px 20px 40px 20px;
  @media screen and (min-width: 460px) {
    max-width: 421px;
  }
  @media ${breakpoints.minTablet} {
    padding: 40px 80px;
    max-width: 610px;
  }
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  text-align: center;
  margin-bottom: 20px;
  @media ${breakpoints.minTablet} {
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;

    color: #000000;
  }
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

export const SecondPageParameterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

export const SexList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 16px;
`;

export const SexItem = styled.li`
  position: relative;
  cursor: pointer;
`;

export const MaleIcon = styled(maleIconPrimal)`
  width: 40px;
  height: 40px;
`;
export const FemaleIcon = styled(femaleIconPrimal)`
  height: 40px;
  width: 40px;
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

export const ParameterItem = styled.li`
  &:nth-child(5) {
    margin-top: 12px;
  }
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

export const ControlsBtnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media ${breakpoints.minTablet} {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;

export const ControlsBtn = styled.button`
  width: 100%;
  @media ${breakpoints.minTablet} {
    width: 180px;
    font-size: 20px;
    line-height: 27px;
  }
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
