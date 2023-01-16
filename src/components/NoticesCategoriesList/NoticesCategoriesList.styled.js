import styled, { css } from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as heartPrimal } from './img/heartPrimal.svg';
// import

export const Section = styled.section`
  margin-top: 30px;
  @media ${breakpoints.minTablet} {
    margin-top: 57px;
  }
  @media ${breakpoints.minTablet} {
    margin-top: 60px;
  }
`;

export const NoticesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
  @media ${breakpoints.minTablet} {
    grid-template-columns: repeat(2, 4fr);
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 4fr);
  }
`;

export const NoticesItem = styled.li`
  position: relative;
  margin: auto;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
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
  padding 6px 53px 6px 20px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  margin-top: 20px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  color: transparent;
  fill: transparent;
  &:hover,
  &:focus {
    color: #f59256;
    fill: #f59256;
  }
`;

export const HeartIconPrimal = styled(heartPrimal)`
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;
