import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const List = styled.ul`
  display: grid;
  /* grid-template-columns: 280px; */
  row-gap: 40px;
  margin-top: 40px;
  @media ${breakpoints.minTablet} {
    grid-template-columns: 336px 336px;
    row-gap: 60px;
    column-gap: 32px;
    margin-top: 60px;
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: 395px 395px 395px;
  }
`;

export const ErrorSearch = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
  text-align: center;
  margin-top: 40px;

  @media ${breakpoints.desktop} {
    margin-top: 60px;
    font-size: 30px;
  }
`;
