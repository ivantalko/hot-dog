// import axios from 'axios';
// import React, { useMemo, useState } from 'react';
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
  // const [location, setLocation] = useState('');
  // const [isOpen, setIsOpen] = useState(false);
  // const [notFoundCity, setNotFoundCity] = useState(false);
  // const [arrayLocation, setArrayLocation] = useState('');
  const userMail = useSelector(selectEmail);
  const userName = useSelector(selectName);
  const userCity = useSelector(selectLocation);
  const userPhone = useSelector(selectPhone);
  const userBirthday = useSelector(selectBirthday);
  // const [active, setActive] = useState('');

  // const handelChangeLocation = query => {
  //   setLocation(query);

  //   console.log('first', location);
  //   setIsOpen(true);

  //   fetchProducts(query.trim());
  //   if (!location) {
  //     setArrayLocation(false);
  //     setNotFoundCity(true);
  //     return;
  //   }
  // };

  // const fetchProducts = useMemo(
  //   () => async search => {
  //     if (!search) return;
  //     try {
  //       const response = await axios.get(
  //         `https://petssupportapi.onrender.com/location?city=${search}`
  //       );
  //       if (response?.data?.cities.length === 0) {
  //         setNotFoundCity(true);
  //         setArrayLocation(false);
  //         return;
  //       }

  //       setArrayLocation(response?.data?.cities);
  //       setNotFoundCity(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [arrayLocation]
  // );


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
        // handelChangeLocation={handelChangeLocation}
        setActive={setActive}
        name={'city'}
        label={'City:'}
        user={userCity}
      />
    </ul>
  );
}

export default UserInfo;
