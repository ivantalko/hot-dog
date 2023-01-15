import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const NavigationStyled = styled.div`
  display: none;

  @media ${breakpoints.minTablet} {
    display: flex;
  }
  @media ${breakpoints.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const NavStyled = styled.div`
  @media ${breakpoints.minTablet} {
    display: none;
  }
  @media ${breakpoints.desktop} {
    display: block;
  }
`;
