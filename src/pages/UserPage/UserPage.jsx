import { ContainerUser } from '../../components/Container-user/Container-user';
import Logout from 'components/User/UserCard/Logout/Logout';
import UserPhoto from 'components/User/UserCard/UserPhoto/UserPhoto';
import { UserPagePetsData } from 'components/UserPagePetsData/UserPagePetsData';

import {
  InfoUser,
  LogoutBox,
  PetDiv,
  Title,
  UserDiv,
  Wrapper,
} from './UserPage.styled';

const UserPage = () => {
  return (
    <ContainerUser>
      <Wrapper>
        <UserDiv>
          <Title>My information:</Title>
          <InfoUser>
            <UserPhoto />
            <LogoutBox>
              <Logout />
            </LogoutBox>
          </InfoUser>
        </UserDiv>
        <PetDiv>
          <UserPagePetsData />
        </PetDiv>
      </Wrapper>
    </ContainerUser>
  );
};

export default UserPage;
