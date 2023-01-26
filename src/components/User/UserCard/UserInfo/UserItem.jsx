import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putUpdateUser } from 'redux/User/user-operation';
import { Button, LiInput, LiItem, LiLabel, UserValidation } from './UserInfo.styled';
import { ReactComponent as PenIcon } from 'helpers/images/user/pen_edit.svg';
import { ReactComponent as EditIcon } from 'helpers/images/user/ci_edit.svg';

const emailPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;
const cityPattern = /^(\w+(,)\s*)+\w+$/;
const phonePattern = /^\+380\d{9}$/;

const UserItem = ({
  label,
  name,
  user,
  active,
  setActive,
  handelChangeLocation,
  closeCitysList,
  location,
  isOpen,
}) => {
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const refWrapper = useRef(null);

  const [error, setError] = useState('');

  const convertDate = date => {
    if (!date?.length) return;
    const d = date?.split('-');

    return ([d[0], d[1], d[2]] = [d[2], d[1], d[0]].join('.'));
  };

  const inputValueSelector = () => {
    if (name === 'birthday') {
      return converterDateFormat(user);
    } else if (name === 'city') {
      return location ?? location ?? user;
    } else if (
      name === 'city' &&
      isOpen &&
      location === value &&
      value !== user
    ) {
      return user;
    } else {
      return value ?? user;
    }
  };

  const onChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setValue(value);
    }

    if (name === 'email') {
      if (!value.match(emailPattern)) {
        setError('Email is not valid');
      } else if (error) {
        setError('');
      }
      setValue(value);
    }

    if (name === 'birthday') {
      setValue(value);
    }

    if (name === 'phone') {
      if (!value.match(phonePattern)) {
        setError('Phone is not valid');
      } else if (error) {
        setError('');
      }
      setValue(value);
    }
    if (name === 'city') {
      if (!value.match(cityPattern)) {
        setError('Error. Example: Chabany, Kyiv');
      } else if (error) {
        setError('');
      }
      setValue(value);
      handelChangeLocation(value);
    }
  };

  const converterDateFormat = date => {
    if (!date?.length) return '';
    const info = date?.split('.');
    return ([info[0], info[1], info[2]] = [info[2], info[1], info[0]].join(
      '-'
    ));
  };

  const onEdit = name => {
    const data = name === 'birthday' ? convertDate(value) : value;
    if (name === 'city') closeCitysList();
    setActive('');
    if (!data || data === user) {
      setValue(name === 'birthday' ? converterDateFormat(user) : user);
      return;
    }

    if (name === 'city' && isOpen && location === value && value !== user) {
      return;
    }
    if (name === 'city' ?? user !== location) {
      setValue(null);
      return dispatch(putUpdateUser({ location }));
    }

    dispatch(putUpdateUser({ [name]: data || user }));
  };

  const onSetActive = name => setActive(name);

  return (
    <>
      <LiItem ref={active === name ? refWrapper : null}>
        <LiLabel htmlFor={name}>{label}</LiLabel>
        <LiInput
          disabled={active !== name}
          active={active === name}
          type={name === 'birthday' ? 'date' : 'text'}
          value={inputValueSelector()}
          name={name}
          onChange={onChange}
        />
        <Button>
          {active === name ? (
            <EditIcon onClick={() => onEdit(name)} />
          ) : (
            <PenIcon
              onClick={() => onSetActive(name)}
              fill={active && active !== name ? 'rgba(17,17,17,0.6)' : '#F59256'}
            />
          )}
        </Button>
      </LiItem>
      {error && (active === name) ? <UserValidation>{error}</UserValidation> : null}
    </>
  );
};

export default UserItem;
