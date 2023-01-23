import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const OurFriendsTimeWorks = styled.li`
  margin-bottom: 4px;
  cursor: pointer;

  :hover,
  :focus{
    color: #f59256;
  }
&.active{
  color: #f59256;
}

@media ${breakpoints.minTablet} {
  margin-bottom: 8px;
}
@media ${breakpoints.desktop} {
  margin-bottom: 12px;
}
`;

export const OurFriendsDefis = styled.span`
pointer-events:none;
`