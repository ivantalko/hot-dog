import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const List = styled.ul`
  display: grid;
  list-style: none;
  width: 280px;
  margin: 40px auto 0px auto;
  @media ${breakpoints.minTablet} {
    grid-template-columns: 1fr 1fr;
    margin: 60px 0px 0px 0px;
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
