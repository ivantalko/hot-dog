import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 42px;

  padding-top: 16px;
  padding-right: 20px;
  padding-left: 20px;

  background-color: #fdf7f2;

  @media ${breakpoints.minTablet} {
    padding-bottom: 88px;
  }

  @media ${breakpoints.desktop} {
    padding-bottom: 59px;
  }
`;
