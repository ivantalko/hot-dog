import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBirthday,
  selectEmail,
  selectLocation,
  selectName,
  selectPhone,
} from 'redux/User/user-selectors';
import UserItem from './UserItem';

function UserInfo() {
  const userMail = useSelector(selectEmail);
  const userName = useSelector(selectName);
  const userCity = useSelector(selectLocation);
  const userPhone = useSelector(selectPhone);
  const userBirthday = useSelector(selectBirthday);
  const [active, setActive] = useState('');

  return (
    <ul>
      <UserItem
        active={active}
        setActive={setActive}
        name={'name'}
        label={'Name:'}
        user={userName}
      />
      <UserItem
        active={active}
        setActive={setActive}
        name={'email'}
        label={'Email:'}
        user={userMail}
      />
      <UserItem
        active={active}
        setActive={setActive}
        name={'birthday'}
        label={'Birthday:'}
        user={userBirthday}
      />
      <UserItem
        active={active}
        setActive={setActive}
        name={'phone'}
        label={'Phone:'}
        user={userPhone}
      />
      <UserItem
        active={active}
        setActive={setActive}
        name={'location'}
        label={'City:'}
        user={userCity}
      />
    </ul>
  );
}

export default UserInfo;
