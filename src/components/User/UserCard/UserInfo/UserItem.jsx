import React, { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putUpdateUser } from "redux/User/user-operation";
import { Button, LiInput, LiItem, LiLabel } from "./UserInfo.styled";
import { ReactComponent as PenIcon } from 'helpers/images/user/pen_edit.svg';
import {ReactComponent as EditIcon} from 'helpers/images/user/ci_edit.svg';
 

const emailPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;
const cityPattern = /^(\w+(,)\s*)+\w+$/;
const phonePattern = /^\+380\d{9}$/;

const UserItem = ({ label, name, user, active, setActive }) => {
    const [value, setValue] = useState();
    const dispatch = useDispatch();
    const refWrapper = useRef(null);
    
    


    const [error, setError] = useState('');

    const convertDate = (date) => {
        if (!date?.length) return;
        const d = date?.split('-');
        return [d[0], d[1], d[2]] = [d[2], d[1], d[0]].join('.');
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
        }
    };

    const onEdit = name => () => {
        const data = name === 'birthday' ? convertDate(value) : value;
        setActive('');
        if (!data || (data === user)) return;
        dispatch(putUpdateUser({ [name]: data || user }))
    }

    const onSetActive = name => () => setActive(name);

    const converterDateFormat = (date) => {
        if (!date?.length) return '';
        const info = date?.split('.');
        return [info[0], info[1], info[2]] = [info[2], info[1], info[0]].join('-');
    }

    return (
        <>
            <LiItem ref={active === name ? refWrapper : null}>
                <LiLabel htmlFor={name}>{label}</LiLabel>
                <LiInput
                    disabled={active !== name}
                    active={active === name}
                    type={name === 'birthday' ? 'date' : 'text'}
                    value={value || (name === 'birthday' ? converterDateFormat(user) : user) || ''}
                    name={name}
                    onChange={onChange}
                />
                <Button>
                    {active === name ? (
                        <EditIcon onClick={onEdit(name)} />
                    ) : (
                        <PenIcon
                            onClick={onSetActive(name)}
                            fill={
                                active && active !== name ? 'rgba(17,17,17,0.6)' : '#F59256'
                            }
                        />
                    )}
                </Button>
            </LiItem>
        </>
    );
};

export default UserItem