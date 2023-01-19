import { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { putUpdateUser } from "redux/User/user-operation";


const emailPattern = /^[a-zA-Z0-9]+[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/;
const cityPattern = /^(\w+(,)\s*)+\w+$/;
const phonePattern = /^\+380\d{9}$/;

export const UserItem = ({ label, name, user, active, setActive }) => {
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
        dispatch(putUpdateUser({[name]: data || user}))
    }

    const onSetActive = name => () => setActive(name);

    const converterDateFormat = name => (date) => {
        if (!date?.length) return '';
        const info = date?.split('.');
        return [info[0], info[1], info[2]] = [info[2], info[1], info[0]].join('-');
    }

    return (
        <>
        <li ref={active === name ? refWrapper : null}>
                <label htmlFor={name}>{label}</label>
                <input
                    disabled={active !== name}
                    active={active === name}
                    type={name === 'birthday' ? 'date' : 'text'}
                    value={value || (name === 'birthday' ? converterDateFormat(user) : user) || ''}
                    name={name}
                    onChange={onChange}
                />
                <button>
                    active === name ? (
                        <img src="" alt="" />
                    )
                </button>
        </li>
        </>
    )
}