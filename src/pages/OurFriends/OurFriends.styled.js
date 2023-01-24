import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';


export const OurFriendsBox = styled.div`
  font-family: 'Manrope';
  margin: 0 auto;
  padding: 0px 20px 100px;
  /* min-width: 320px;
  max-width: 480px; */

  @media ${breakpoints.minTablet} {
    padding: 0px 32px 100px;
  }

  @media ${breakpoints.desktop} {
    padding: 0px 15px 100px 16px;
  } ;
`;

export const OurFriendsBoxTitle = styled.h2`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  color: #000000;

  text-align: center;
  margin: 0 auto 28px;

  @media ${breakpoints.minTablet} {
    font-size: 48px;
    margin: 0 auto 40px;
  }

  @media ${breakpoints.desktop} {
    margin: 0 auto 60px;
  }
`;

export const OurFriendsCards = styled.div`
  text-decoration: none;

  display: flex;
  max-width: 280px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;

  @media ${breakpoints.minTablet} {
    max-width: 704px;
    gap: 32px;
    /* flex-direction: row; */
    /* flex-wrap: wrap */
  }
  @media ${breakpoints.desktop} {
    max-width: 1249px;
    gap: 32px;
    /* flex-direction: row; */
    /* flex-wrap: wrap */
  }
`;

export const OurFriendsCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border-radius: 20px;

  width: 280px;
  font-weight: 500;


  padding: 12px 4px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media ${breakpoints.minTablet} {
    width: 336px;
    height: 288px;

    padding: 16px 4px 16px 16px;
  }

  @media ${breakpoints.desktop} {
    width: 395px;
    height: 337px;
  }
`;

export const OurFriendsCardSecondTitle = styled.a`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.38;
  text-decoration-line: underline;

  text-align: center;
  color: #f59256;


  margin: 0 auto 12px;

  
  @media ${breakpoints.minTablet} {
    font-size: 16px;
    line-height: 1.38;
    margin: 0 auto 16px;
  }

  @media ${breakpoints.desktop} {
    font-size: 20px;
    line-height: 1.35;
  }
`;

export const OurFriendsInfo = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 12px;
  line-height: 1.33;

  @media ${breakpoints.minTablet} {
    font-size: 14px;
    line-height: 1.36;
  }

  @media ${breakpoints.desktop} {
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const OurFriendsLogo = styled.img`
  display:block;
  width: 110px;
  height: 78px;
  margin-right: 12px;
  margin-top: 0px;

  @media ${breakpoints.minTablet} {
    width: 120px;
    height: 85px;
    margin-right: 14px;
  }

  @media ${breakpoints.desktop} {
    width: 158px;
    height: 115px;
  }
`;

export const OurFriendsInfoItem = styled.ul`

`;


export const OurFriendsAdress = styled.li`
  margin-bottom: 4px;

  
@media ${breakpoints.minTablet} {
  margin-bottom: 8px;
}
@media ${breakpoints.desktop} {
  margin-bottom: 12px;
}
`;


export const OurFriendseAdressMap = styled.a`
  color: inherit;
`;

export const OurFriendseEmail = styled.li`
  margin-bottom: 4px;


@media ${breakpoints.minTablet} {
  margin-bottom: 8px;
}
@media ${breakpoints.desktop} {
  margin-bottom: 12px;
}
`;
export const OurFriendseEmailMailto = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const OurFriendsPhone = styled.li` 
`;

export const OurFriendsPhoneTel = styled.a`
  text-decoration: none;
  color: inherit;
`;
