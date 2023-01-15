import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Container = styled.div`
    margin: 0px auto;
    padding: 30px 0;
    
    @media ${breakpoints.tablet} {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`

export const Wrapper = styled.div`
    margin-bottom: 47px;

    @media ${breakpoints.tablet} {
        margin-bottom: 44px;
    }

    @media ${breakpoints.desktop} {
        margin-bottom: 0px;
    }
`

export const TitleBox = styled.div`
    width: 320px;
    margin-bottom: 18px;
    display: block;
    margin-right: auto;
    margin-left: auto;

    padding: 0px 20px;

    font-weight: 500;
    line-height: 1.35;
    font-size: 20px;
    letter-spacing: 0.04em;
    color: #000000;

    @media ${breakpoints.tablet} {
        margin-left: 0px;
        margin-bottom: 40px;
        font-size: 28px;
        line-height: 1.35;

        padding: 0px 0px;
    }

    @media ${breakpoints.desktop} {
        padding: 0px 16px;
        margin-bottom: 24px;
    }
`