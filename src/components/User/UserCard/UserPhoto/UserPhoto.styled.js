import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${breakpoints.tablet} {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media ${breakpoints.desktop} {
        flex-direction: column;
    }
`;

export const Wrapper = styled.div`
    position: relative;
`;

export const Photo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 233px;
    height: 233px;
    background: #fdf7f2;
    border-radius: 50%;

    @media ${breakpoints.maxMobile} {
        margin-bottom: 40px;
    }

    @media ${breakpoints.desktop} {
        margin-bottom: 32px;
        margin-left: 89px;
    }
`;

export const Avatar = styled.img`
    width: 233px;
    height: 233px;
    border-radius: 50%;
`

export const Button = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    border: none;

    background: none;
    fill: #f58256;

    @media ${breakpoints.maxMobile} {
        top: 228px;
        right: -25px;
    }

    @media ${breakpoints.minTablet} {
        top: 241px;
        right: -6px;
    }

    @media ${breakpoints.desktop} {
        top: 224px;
        right: -61px;
    }
`;

export const Edit = styled.span`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Text = styled.span`
    margin-left: 4px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.04em;
    line-height: 22px;
    color: #111111;
`