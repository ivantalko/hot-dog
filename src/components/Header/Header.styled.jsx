import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const HeaderStyled = styled.header`
  margin-bottom: 42px;

  @media ${breakpoints.minTablet} {
    margin-bottom: 88px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 59px;
  }
`;
