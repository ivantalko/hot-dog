import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 0 50px;

  @media ${breakpoints.minTablet} {
    padding: 0 0 100px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 0 100px;
  }
`;

export const Container = styled(ContainerStyled)`
    background-color: #fdf7f2;
    height: 100%;
    width: 100%;
    padding: 0 0 50px;
    
    @media ${breakpoints.minTablet} {
        padding: 0 0 100px;
    }

    @media ${breakpoints.desktop} {
        padding: 0 0 100px;
    }
`

export const Wrapper = styled.div`
    display: flex;

    @media ${breakpoints.maxTablet} {
        flex-direction: column;
    }
`;

export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;

    @media ${breakpoints.mobile} {
        margin-right: 32px;
    }
`

export const Title = styled.h2`

    font-weight: 500;
    line-height: 38px;
    font-size: 28px;
    color: #000000;

    @media ${breakpoints.mobile} {
        font-size: 20px;
        line-height: 27px;
    }
    @media ${breakpoints.maxMobile} {
        padding-left: 20px;
    }

    @media ${breakpoints.tablet} {
        padding-left: 32px;
    }

    @media ${breakpoints.desktop} {
        padding-left: 16px;
    }
`

export const InfoUser = styled.div`
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0 40px 40px 0;
    height: 537px;
    padding: 20px 23px;
    margin-top: 18px;

    @media ${breakpoints.minTablet} {
        height: 311px;
        padding: 24px 40px 24px 32px;
        margin-top: 40px;
    }

    @media ${breakpoints.desktop} {
        height: 541px;
        margin-top: 24px;
        padding: 20px 16px;
    }
`

export const LogoutBox = styled.div`
    @media ${breakpoints.maxMobile} {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

export const PetDiv = styled.div`
    width: 100%;
    padding-right: 20px;

    @media ${breakpoints.maxMobile}{
        padding-left: 20px;
    }

    @media ${breakpoints.tablet} {
        padding-left: 32px;
        padding-right: 32px;
    }

    @media ${breakpoints.desktop} {
        padding-right: 16px;
    }
`