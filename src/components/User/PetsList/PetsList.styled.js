import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const UserPetCard = styled.li`
  min-width: 280px;
  max-width: 440px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px 40px;
`;

export const UserPetAvatarThumb = styled.div`
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
`;

export const UserPetAvatarImage = styled.img`
  /* @media ${breakpoints.minTablet} {

  }
  @media ${breakpoints.desktop} {

  } */
`;

export const UserPetDescription = styled.div`
  position: relative;
  /* @media ${breakpoints.minTablet} {

  }
  @media ${breakpoints.desktop} {

  } */
`;

export const UserPetText = styled.p`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #000000;

  &:last-child {
    margin-bottom: 0;
  }

  /* @media ${breakpoints.minTablet} {

  }
  @media ${breakpoints.desktop} {

  } */
`;

export const UserPetCategoryName = styled.span`
  font-weight: 500;

  /* @media ${breakpoints.minTablet} {

  }
  @media ${breakpoints.desktop} {

  } */
`;

export const UserPetDeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  fill: #111111;
  fill-opacity: 0.6;

  border: none;
  background: transparent;

  cursor: pointer;
  transition: fill linear 200ms, fill-opacity linear 200ms;
  &:hover,
  &:focus {
    fill: #f59256;
    fill-opacity: 1;
    outline: none;
  }

  /* @media ${breakpoints.minTablet} {

  }
  @media ${breakpoints.desktop} {

  } */
`;
