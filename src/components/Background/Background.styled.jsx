import styled from 'styled-components';
import first from '../.././images/first.png';
import second from '../.././images/second.png';

export const BackgroundAuthorize = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #fdf7f2;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${second}), url(${first});
  background-size: 1077px, 511px;
  background-position: bottom -11px left, right 30px bottom;
  background-repeat: no-repeat, no-repeat;
`;
