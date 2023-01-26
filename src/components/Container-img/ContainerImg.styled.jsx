import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const ContainerStyledimg = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 320px;
  max-width: 480px;

  @media ${breakpoints.minTablet} {
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1280px;
  }
`;
