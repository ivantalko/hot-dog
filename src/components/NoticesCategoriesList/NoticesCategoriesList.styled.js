import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Section = styled.section`
  margin-top: 30px;
  @media ${breakpoints.minTablet} {
    margin-top: 57px;
  }
  @media ${breakpoints.minTablet} {
    margin-top: 60px;
  }
`;

export const NoticesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
  @media ${breakpoints.minTablet} {
    grid-template-columns: repeat(2, 4fr);
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 4fr);
  }
`;

export const NoticesItem = styled.li`
  margin: auto;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
`;
