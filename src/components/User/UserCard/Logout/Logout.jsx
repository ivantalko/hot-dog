import iconLogout from 'helpers/images/user/logout.svg';
import { useDispatch } from 'react-redux';
import { logoutUserOperation } from 'redux/Auth/auth-operations';
import { Button, ImageLog } from './Logout.styled';

export const Logout = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutUserOperation())
    }

    return (
        <Button onClick={logoutHandler}>
            <ImageLog src={iconLogout} alt="" />
            Log Out
        </Button>
    )
}

export default Logout;
