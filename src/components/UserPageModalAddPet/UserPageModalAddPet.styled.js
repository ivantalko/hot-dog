import styled from 'styled-components';
import { ReactComponent as iconClosePrimal } from './img/closeIcon.svg';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as iconPlusPrimal } from './img/iconPlus.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px;
  overflow: auto;
  display: flex;
`;

export const PreviewImg = styled.img`
  width: ${props => (props.chooseAvatar ? '100%' : 'auto')};
  height: ${props => (props.chooseAvatar ? '100%' : 'auto')};
  object-fit: ${props => (props.chooseAvatar ? 'cover' : 'cover')};
`;

export const ModalMainPage = styled.div`
  position: relative;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 20px;
  margin: auto;
  @media screen and (min-width: 400px) {
    max-width: 400px;
  }
  @media ${breakpoints.minTablet} {
    padding: 40px 80px;
    max-width: 608px;
  }
  &.hidden {
    position: absolute;
    display: none;
    pointer-events: none;
  }
`;
export const ModalSecondPage = styled.div`
  position: relative;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 20px;
  margin: auto;
  @media screen and (min-width: 400px) {
    max-width: 400px;
  }
  @media ${breakpoints.minTablet} {
    padding: 40px 80px;
  }
  &.hidden {
    display: none;
    pointer-events: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: transparent;
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

export const MainPageModalTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  text-align: center;
  margin-bottom: 28px;
  @media ${breakpoints.minTablet} {
    font-size: 36px;
    line-height: 49px;
  }
`;
export const SecondPageModalTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #111111;
  text-align: center;
  margin-bottom: 20px;
  @media ${breakpoints.minTablet} {
    font-size: 36px;
    line-height: 49px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;
export const CategoryListSecondPage = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const CategoryTitle = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #111111;
  margin-bottom: 8px;
  @media ${breakpoints.minTablet} {
    font-size: 24px;
    line-height: 26px;
  }
`;
export const CategoryTitleSecondPage = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 20px;
  @media ${breakpoints.minTablet} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const CategoryCommentsTitle = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 8px;
  text-align: start;
  @media ${breakpoints.minTablet} {
    font-size: 24px;
    line-height: 26px;
  }
`;

export const CategoryInput = styled.input`
  cursor: pointer;
  width: 100%;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: rgba(27, 27, 27, 0.6);
  padding: 12px 14px;
  transition: 250ms;
  &:hover,
  &:focus {
    border: 1px solid #f59256;
    box-shadow: inset 0px 0px 4px #f59256;
  }
  &:invalid {
    color: Red;
    font-weight: 700;
  }
`;

export const ControlsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ControlsBtn = styled.button`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  padding: 8px 0px;
  width: 100%;
  justify-content: center;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #f59256;
  }
`;

export const AvatarInputBox = styled.div`
  overflow: hidden;
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
  width: 208px;
  height: 208px;
  background-color: red;
  opacity: 0;
  border-radius: 20px;
`;

export const IconPlus = styled(iconPlusPrimal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TextArea = styled.textarea`
  cursor: pointer;

  height: 100px;
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
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 20px;
  transition: 250ms;
  &:hover,
  &:focus {
    border: 1px solid #f59256;
    color: #f59256;
    box-shadow: inset 0px 0px 4px #f59256;
  }
  &:invalid {
    color: Red;
    font-weight: 700;
  }
`;
