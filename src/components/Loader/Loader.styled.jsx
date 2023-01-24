import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Paw = styled.svg`
  width: 80px;
  height: 80px;
  fill: #f59256;
  animation: loading-spinner 1s linear infinite;

  @media ${breakpoints.minTablet} {
    width: 150px;
    height: 150px;
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
