import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const ContainerStyleduser = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 0;
  padding-right: 20px;
  min-width: 320px;
  max-width: 480px;

  @media ${breakpoints.minTablet} {
    padding-left: 0;
    padding-right: 32px;
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    padding-left: 0;
    padding-right: 16px;
    max-width: 1280px;
  }
`;
