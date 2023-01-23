import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as heartPrimal } from './img/heartPrimal.svg';
import { ReactComponent as deleteIconPrimal } from './img/deleteIcon.svg';

export const Section = styled.section`
  margin: auto;
  margin-top: 30px;
  max-width: 450px;

  @media ${breakpoints.minTablet} {
    max-width: 768px;
    margin-top: 57px;
  }
  @media ${breakpoints.desktop} {
    margin-top: 60px;
    max-width: 1280px;
  }
`;

export const NoticesList = styled.ul`
  display: grid;

  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
  max-width: 450px;
  margin: auto;
  @media screen and (min-width: 450px) {
    max-width: initial;
  }
  @media ${breakpoints.minTablet} {
    grid-template-columns: repeat(2, 4fr);
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 4fr);
  }
`;

export const NoticesItem = styled.li`
  @media ${breakpoints.minTablet} {
    width: 100%;
  }
  display: grid;
  align-items: end;
  height: 100%;
  position: relative;
  margin: auto;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  @media ${breakpoints.minTablet} {
    border-radius: 0px 0px 40px 40px;
  }
  padding-bottom: 12px;
  display: grid;
  align-items: end;
`;

export const NoticesItemImg = styled.img`
  margin-bottom: 20px;
  @media ${breakpoints.minTablet} {
    height: 288px;
    width: 100%;
    object-fit: cover;
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
  padding: 0px 20px;
  margin-bottom: 20px;
  height: 76px;
`;

export const ParametersList = styled.ul`
  list-style: none;
  padding: 0px 20px;
  display: grid;
  gap: 8px;
  margin-bottom: 20px;
`;

export const ParametersItemText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #111111;
`;

export const ParametersName = styled.span`
  width: 50px;
  margin-right: 40px;
  display: flex;
`;

export const PetCategory = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  padding: 6px 53px 6px 20px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  top: 20px;
`;

export const FavoriteBtn = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: transparent;
  color: transparent;
  fill: transparent;
  transition: 250ms;
  width: 44px;
  height: 44px;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  color: white;
  fill: white;

  &:hover,
  &:focus {
    color: #f59256;
    fill: #f59256;
  }
`;

export const HeartIconPrimal = styled(heartPrimal)`
  height: 28px;
  width: 28px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  margin: auto;
  width: 248px;
  height: 38px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #f59256;
  cursor: pointer;
  transition: 250ms;
  color: #f59256;
  &:hover,
  &:focus {
    background: #f59256;
    color: white;
  }
`;
export const DeleteBtn = styled.button`
  display: flex;
  margin: auto;
  width: 248px;
  height: 38px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 2px solid #ff6101;
  border-radius: 40px;
  margin-top: -8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: 250ms;
  color: #ff6101;
  fill: #ff6101;
  &:hover,
  &:focus {
    background: #f59256;
    color: white;
    fill: white;
  }
`;

export const ModalNoticeBackdrop = styled.div`
  background-color: #0000001f;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const DeleteIcon = styled(deleteIconPrimal)`
  margin-left: 13px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const ConfirmBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(5px);
  z-index: 2;
`;
export const ConfirmModal = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #fdf7f2;
  box-shadow: 0px 0px 8px #d5d5d5;
  width: max-content;
  height: max-content;
  border-radius: 20px;
  padding: 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: rgba(27, 27, 27, 0.6);
  display: flex;
  flex-direction: column;
`;

export const ConfirmText = styled.p`
  margin-bottom: 8px;
`;

export const PetName = styled.span`
  color: black;
  font-weight: bold;
  margin-right: 3px;
`;

export const ConfirmBtnList = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export const ConfirmBtn = styled.button`
  border-radius: 10px;
  border: 1px solid #f59256;
  padding: 5px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  transition: 250ms;
  color: rgba(27, 27, 27, 0.6);
  &:hover,
  &:focus {
    background-color: #f59256;
    color: white;
  }
`;
