import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const NavigationStyled = styled.div`
  display: none;

  @media ${breakpoints.minTablet} {
    display: flex;
  }
`;

export const NavStyled = styled.div`
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;
