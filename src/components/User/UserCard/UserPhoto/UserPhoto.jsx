import { useDispatch, useSelector } from "react-redux"
import { selectAvatarURL } from "redux/User/user-selectors"
import { Avatar, Button, Container, Edit, Photo, Text, Wrapper } from "./UserPhoto.styled";
import addPhoto from 'helpers/images/user/addFoto.svg';
import { ReactComponent as IconCamera } from 'helpers/images/user/Camera.svg'

export const UserPhoto = () => {
    const userPhoto = useSelector(selectAvatarURL);
    const dispatch = useDispatch();

    const onChangePhoto = e => {
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);
        // dispatch(updateUserAvatar(formData));
    }
    return (
        <Container>
            <Wrapper>
                <Photo>
                    {userPhoto ? (
                        <Avatar src={userPhoto} alt="user_avatar" />
                    ) : (
                        <img src={addPhoto} alt="" />
                    )}
                </Photo>

                <Button>
                    <label htmlFor="upload_avatar">
                        <Edit>
                        {' '}
                            <IconCamera width='20' height='20' />
                            <Text>Edit photo</Text>
                        </Edit>
                    </label>
                    <input
                        type="file"
                        id="upload_avatar"
                        name="upload_avatar"
                        style={{ opacity: 0, width: 0, height: 0 }}
                        onChange={onChangePhoto}
                    />
                </Button>
            </Wrapper>
        </Container>
    )
}

export default UserPhoto;