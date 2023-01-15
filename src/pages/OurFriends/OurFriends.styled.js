import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
// import { vars } from ''

export const OurFriendsContainer = styled.div`
background-color: #fdf7f2;
min-height: 100vh;
min-width: 100vw;
`

export const OurFriendsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdf7f2;


  font-family: 'Manrope';
  width: 100%;
  margin: 0 auto;
  padding: 42px 20px 100px;
  min-width: 320px;
  max-width: 480px;

  @media ${breakpoints.minTablet} {
    padding: 88px 32px 100px;
  }

  @media ${breakpoints.desktop} {
    padding: 61px 16px 100px;
  } ;
`;

export const OurFriendsBoxTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  color: #000000;

  text-align: center;

  @media ${breakpoints.minTablet} {
    font-size: 48px;
  }
`;

export const OurFriendsCards = styled.div`
  max-width: 280px;
  max-height: 192px;
  font-size: 12px;
  line-height: 1.33;

  background-color: #ffffff;
  border-radius: 20px;
`;

export const OurFriendsCardSecondTitle = styled.h3`
  font-weight: 700;
  
  text-align: center;
  color: #f59256;

  margin: 12px auto;
`;

export const OurFriendsCard = styled.div`
 font-weight: 500;
 box-shadow:(7px 4px 14px rgba(49, 21, 4, 0.07));
`

export const OurFriendsTimeWork = styled.p``;


export const OurFriendsAdress = styled.p``;

export const OurFriendseEmail = styled.p``;

export const OurFriendsPhone = styled.p``;