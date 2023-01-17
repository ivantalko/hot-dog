import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Container = styled.section`
    background-color: #fdf7f2;
    height: 100%;
    width: 100%;
    padding: 0 0 50px;
    
    @media ${breakpoints.tablet} {
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
`

export const Title = styled.h2`

    font-weight: 500;
    line-height: 27px;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: #000000;

    @media ${breakpoints.maxMobile} {
        padding-left: 20px;
    }

    @media ${breakpoints.tablet} {
        font-size: 28px;
        line-height: 1.35;

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