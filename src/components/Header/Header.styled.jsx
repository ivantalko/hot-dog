import styled from 'styled-components';
import { breakpoints } from '../../helpers/breakpoints';

export const HeaderStyled = styled.header`
  margin-bottom: 42px;

  padding-top: 16px;
  padding-right: 20px;
  padding-left: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fdf7f2;

  @media ${breakpoints.minTablet} {
    margin-bottom: 88px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 59px;
  }
`;
