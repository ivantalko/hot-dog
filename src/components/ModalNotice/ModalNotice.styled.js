import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';
import { ReactComponent as IconBtnPrimal } from '../../pages/NoticesPage/img/closeIcon.svg';
import { ReactComponent as HeartIconPrimal } from '../../components/NoticesCategoriesList/img/heartIcon.svg';

export const ModalNoticeBackdrop = styled.div`
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

export const ModalBox = styled.div`
  max-width: 400px;
  @media ${breakpoints.minTablet} {
    max-width: 800px;
    padding: 32px 40px 32px 20px;
  }
  padding: 60px 20px 40px;
  background-color: white;
  border-radius: 20px;
  width: calc(100% - 40px);
  background-color: white;
  margin: auto;
  position: relative;
`;

export const ModalCLoseBtn = styled.button`
  color: black;
  fill: black;
  cursor: pointer;
  background: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 250ms;
  &:hover,
  &:focus {
    color: #f59256;
    fill: #f59256;
  }
`;

export const CatagoryName = styled.span`
  position: absolute;
  top: 80px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #111111;
  padding: 6px 53px 6px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  @media ${breakpoints.minTablet} {
    top: 52px;
  }
`;

export const NoticesInfoImg = styled.img`
  margin-bottom: 16px;
  @media ${breakpoints.minTablet} {
    height: 328px;
    width: 288px;
    object-fit: cover;
    border-radius: 0px 0px 40px 40px;
  }
`;

export const TopBoxStyled = styled.div`
  @media ${breakpoints.minTablet} {
    display: flex;
  }
`;

export const ParametersBox = styled.div`
  margin-left: 20px;
`;

export const NoticesInfoTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 16px;
  @media ${breakpoints.minTablet} {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: -0.01em;
    width: 226px;
    color: #000000;
  }
  @media screen and (min-width: 840px) {
    width: auto;
  }
`;

export const NoticesInfoParameters = styled.p`
  position: relative;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const ParametersList = styled.ul`
  display: grid;
  gap: 8px;
  margin-bottom: 28px;
`;

export const ParametersValue = styled.span`
  width: max-content;
  position: absolute;
  left: 118px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const CloseBtn = styled(IconBtnPrimal)`
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const CommentsText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  margin-bottom: 40px;
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CommentsTextStrong = styled.span`
  font-weight: 700;
`;

export const BtnList = styled.ul`
  display: grid;
  gap: 12px;
  @media ${breakpoints.minTablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
  }
`;

export const ContactBtn = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding: 9px 27px;
  border: 2px solid #f59256;
  background-color: transparent;
  color: #f59256;
  border-radius: 40px;
  width: 100%;
  justify-content: center;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #f59256;
    color: white;
  }
  @media ${breakpoints.minTablet} {
    width: 160px;
    height: 40px;
  }
`;

export const AddToBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding: 9px 27px;
  background-color: #f59256;
  border-radius: 40px;
  border: 2px solid #f59256;
  width: 100%;
  justify-content: center;
  transition: 250ms;
  color: ${p => (p.favBtnRule ? 'white' : '#f59256')};
  fill: ${p => (p.favBtnRule ? '#eb7026' : 'white')};
  background-color: ${p => (p.favBtnRule ? '#f59256' : 'transparent')};
  &:hover,
  &:focus {
    background-color: ${p => (p.favBtnRule ? '#eb7026' : '#f59256')};
    color: white;
  }
  @media ${breakpoints.minTablet} {
    width: 160px;
    height: 40px;
  }
`;

export const HeartIcon = styled(HeartIconPrimal)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;
