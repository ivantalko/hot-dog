import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as AddIconPrimal } from './img/addIcon.svg';

export const PetDataBox = styled.div`
  padding-top: 47px;
  position: relative;
`;

export const PetsDataBoxTop = styled.div`
  display: flex;
`;

export const PetsDataTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const AddBtnBox = styled.div`

border: 2px solid #f59256;
display: inline-flex;
align-items: center;
justify-content: center;
height: 80px;
width: 80px;
flex-direction: column-reverse;
  background: #f59256;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 50%;
  
  justify-content: center;
  position: static;
  bottom: 92px;
  right: 20px;
  cursor: pointer;
  transition: 250ms;
    border: none;
    flex-direction: row;
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    right: 0px;
    width: auto;
    height: auto;
    bottom: auto;
    top: 140px;
    margin-left: auto;
    cursor: default;
  
  @media ${breakpoints.desktop} {
    top: 185px;
    bottom: auto;
    transform: translateY(0);
  }
  &:hover,
  &:focus {
    @media ${breakpoints.maxMobile}  {
      // box-shadow: 0px 0px 1px black;
      background-color: #f59256a8;
     
  }
`;

export const AddBtnText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #111111;
`;

export const AddBtn = styled.button`
  cursor: pointer;
  border: none;

  transition: 250ms;

  margin-left: 15px;
  width: 44px;
  height: 44px;
  background-color: #f59256;
  border-radius: 50%;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 4px grey;
    background-color: #f59256a8;
  }
`;

export const AddIcon = styled(AddIconPrimal)`
  color: inherit;
  fill: inherit;
  height: 32px;
  width: 32px;
  @media ${breakpoints.minTablet} {
    height: 24px;
    width: 24px;
    display: flex;
    margin: auto;
  }
  * {
    color: inherit;
    fill: inherit;
  }
`;
