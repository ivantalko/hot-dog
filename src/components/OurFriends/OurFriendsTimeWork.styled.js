import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const OurFriendsTimeWorks = styled.li`
  display: block;
  margin-bottom: 4px;

@media ${breakpoints.minTablet} {
  margin-bottom: 8px;
}
@media ${breakpoints.desktop} {
  margin-bottom: 12px;
}
`;

// export const OurFriendsModalContainer = styled.div`
// position:relative;
// `

