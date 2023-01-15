import { Title } from 'components/User/Title/Title';
import { UserForm } from 'components/User/UserCard/UserForm';

import { Wrapper, TitleBox, Container } from './UserPage.styled';


const UserPage = () => {


    return (
        <Container>
            <Wrapper>
                <TitleBox>
                <Title title="My information:" />
                </TitleBox>
                <UserForm/>
            </Wrapper>
        </Container>
    )
}

export default UserPage;