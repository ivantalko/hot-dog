import UserPhoto from "components/User/UserCard/UserPhoto/UserPhoto";
import { Container, InfoUser, Title, UserDiv, Wrapper } from "./UserPage.styled";



const UserPage = () => {
    return (
        <>
        <Container>
            <Wrapper>
                <UserDiv>
                        <Title>My information:</Title>
                        <InfoUser>
                            <UserPhoto />
                        </InfoUser>
                </UserDiv>
            </Wrapper>
        </Container>
        </>
    )
}

export default UserPage;