import styled from 'styled-components';
// import { breakpoints } from 'helpers/breakpoints';

export const OurFriendsModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const OurFriendsModalStyled = styled.div`
  position: absolute;
  top: ${props => props.cordinate.top + 20}px;
  left: ${props => props.cordinate.left}px;
  background-color: tomato;
  width: 120px;
  height: 160px;
  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display:flex;

  font-weight: 500;
 font-size: 12px;
 line-height: 1.33;

 padding: 12px;
`;

export const OurFriendsModalDays = styled.ul`
margin-right: 10px;

`

export const OurFriendsModalDay = styled.li`
padding-bottom: 4px;
`

export const OurFriendsModalTimes = styled.ul`
`

export const OurFriendsModalTime = styled.li`
padding-bottom: 4px;
`
