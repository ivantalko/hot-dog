import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

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
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    line-height: 22px;
  }
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
