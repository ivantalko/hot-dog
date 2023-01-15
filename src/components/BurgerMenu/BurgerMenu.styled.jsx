import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

export const BurgerOverlay = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  z-index: 1000;
  min-width: 320px;
  width: 100%;
  min-height: 100vh;
  background: #fdf7f2;
  text-align: center;
`;

export const AuthNavStyled = styled.div`
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;
