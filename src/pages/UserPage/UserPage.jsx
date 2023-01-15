import { Title } from 'components/User/Title/Title';
import { UserForm } from 'components/User/UserCard/UserForm';
import { Container } from 'components/Container/Container';

import { Wrapper, TitleBox } from './UserPage.styled';


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