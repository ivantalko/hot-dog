import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Wrapper = styled.div`
    width: 280px;

    margin-right: auto;
    margin-left: auto;
    margin: 0px auto;
    margin-top: 20px;
    margin-bottom: 20px;

    padding: 20px 16px 86px 12px;

    background-color: #ffffff;
    box-shadow: 7px 4px 16px rgba(0, 0, 0, 0.13);
    border-radius: 20px;

    @media ${breakpoints.tablet} {
        width: 704px;

        padding: 40px 40px 54px 32px;
        border-radius: 40px;

        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 20px;
    }

    @media ${breakpoints.desktop} {
        width: 450px;
        min-height: 500px;
        margin-bottom: 40px;
        padding: 20px 16px 84px 16px;
    }

`

export const UserData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;

    @media ${breakpoints.tablet} {
        width: 665px;

        margin-bottom: 0px;

        flex-direction: row-reverse;
        justify-content: flex-end;
        gap: 52px;
    }

    @media ${breakpoints.desktop} {
        width: 411px;
        gap: 36px;
        flex-direction: column;
    }
`