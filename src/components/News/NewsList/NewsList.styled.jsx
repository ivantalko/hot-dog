import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 280px;
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
