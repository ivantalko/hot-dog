import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Button = styled.button`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.04em;
    line-height: 22px;
    border: none;
    background: none;
    
    cursor: pointer;

    margin-top: 12px;
    padding: 0px;

    color: rgba(17, 17, 17, 0.6);

    @media ${breakpoints.tablet} {
        margin-top: 10px;
    }

    @media ${breakpoints.desktop} {
        margin-top: 16px;
    }
`;

export const ImageLog = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 8px;
`