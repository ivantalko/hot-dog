import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 30px;
`;

export const NoticesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
`;

export const NoticesItem = styled.li`
  background: #ffffff;
  /* Тень для карточек */

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
`;
