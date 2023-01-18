import axios from 'axios';
import Background from 'components/Background';
import BaseButton from 'components/BaseButton';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  loginUserOperation,
  registerUserOperation,
} from 'redux/Auth/auth-operations';
import { getIsLogin } from 'redux/Auth/auth-selectors';

import {
  ButtonsContainer,
  InputRegisterForm,
  InputRegisterFormConfirm,
  LinkRegisterForm,
  RegisterButton,
  RegisterButtonLocation,
  RegisterContainer,
  RegisterForma,
  RegisterLocationContainer,
  TextRegisterForm,
  TitleRegisterForm,
  ValidationContainerEmail,
  ValidationContainerPassword,
  ValidationContainerPhone,
} from './RegisterForm.styled';

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [next, setNext] = useState(true);
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setpasswordDirty] = useState(false);
  const [emailErorr, setEmailError] = useState('Email cannot be emty');
  const [passwordError, setpasswordError] = useState('Password cannot be emty');
  const [phoneError, setphoneError] = useState('Phone cannot be emty');
  const [phoneDirty, setphoneDirty] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notFoundCity, setNotFoundCity] = useState(false);
  //
  const [arrayLocation, setArrayLocation] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let logined = useSelector(getIsLogin);
  const inputs = {
    email: setEmail,
    password: setPassword,
    location: setLocation,
    name: setName,
    phone: setPhone,
  };
  const nextClickButton = () => {
    setPage1(false);
    setPage2(true);
  };
  const backClickButton = () => {
    setPage1(true);
    setPage2(false);
  };
  const isCorrectpassword = e => {
    if (e.target.value.trim() === password) {
      setNext(false);
      setConfirmPassword(e.target.value);
    } else {
      setNext(true);
      setConfirmPassword(e.target.value);
    }
  };

  const handleInput = e => {
    switch (e.target.name) {
      case 'email':
        if (e.target.value === '') {
          setEmailDirty(true);
          setEmailError('Wrong cannot be empty');
        } else {
          setEmailDirty(false);
        }

        let re = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{3,4}/;
        if (
          !re.test(String(e.target.value).toLocaleLowerCase()) ||
          e.target.value.length > 36
        ) {
          setEmailError('Wrong email, exemple: lovepets@ukr.net');
          setEmailDirty(true);
        } else {
          setEmailError('');
          setEmailDirty(false);
        }
        break;
      case 'password':
        if (e.target.value.length < 7 || e.target.value.length > 32) {
          setpasswordError(
            'Passsword  should be more than 7 characters and least 32 characters'
          );
          setpasswordDirty(true);
        } else {
          setpasswordError('');
          setpasswordDirty(false);
        }
        break;
      case 'phone':
        let regex = /^\+?3?8?(0\d{9})$/;
        if (!regex.test(String(e.target.value).toLocaleLowerCase())) {
          setphoneError(
            'Wrong mobile: use + and 12 numbers , number, example: +380930000000'
          );
          setphoneDirty(true);
        } else {
          setphoneError('');
          setphoneDirty(false);
        }
        break;
      default:
    }
    inputs[e.target.name](e.target.value.trim());
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const userInfo = {
      email,
      password,
      location,
      name,
      phone,
    };
    dispatch(registerUserOperation(userInfo))
      .unwrap()
      .then(() => {
        dispatch(loginUserOperation({ email, password }));
      })
      .catch(error => console.error(error));

    setEmail('');
    setPassword('');
    setLocation('');
    setName('');
    setPhone('');
  };
  useEffect(() => {
    if (logined) {
      navigate(`/user`);
      setEmail('');
      setPassword('');
      return;
    }
  }, [logined, navigate]);
  //
  const fetchProducts = useMemo(
    () => async search => {
      if (!search) return;
      try {
        const response = await axios.get(
          `https://petssupportapi.onrender.com/location?city=${search}`
        );
        if (response?.data?.cities.length === 0) {
          setNotFoundCity(true);
          setArrayLocation(false);
          return;
        }

        setArrayLocation(response?.data?.cities);
        setNotFoundCity(false);
      } catch (error) {
        console.log(error.message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [arrayLocation]
  );

  const handelChangeLocation = e => {
    setLocation(e.target.value);
    setIsOpen(true);
    fetchProducts(e.target.value.trim());
    if (!location) {
      setArrayLocation(false);
      setNotFoundCity(true);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      setIsOpen(false);
      setNotFoundCity(false);
    }
  };
  const handleButtonClick = e => {
    setLocation(e.currentTarget.innerText);
    setIsOpen(false);
  };

  return (
    <Background>
      <RegisterContainer>
        <TitleRegisterForm>Registration</TitleRegisterForm>

        <RegisterForma onSubmit={handleFormSubmit}>
          {page1 && (
            <>
              {emailDirty && (
                <ValidationContainerEmail>
                  {emailErorr}
                </ValidationContainerEmail>
              )}
              <InputRegisterForm
                placeholder="Email"
                label="Email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
                required
                name="email"
                onChange={handleInput}
                value={email}
                onBlur={handleInput}
              />
              {passwordDirty && (
                <ValidationContainerPassword>
                  {passwordError}
                </ValidationContainerPassword>
              )}
              <InputRegisterForm
                label="Password"
                type="password"
                placeholder="Password"
                required
                minLength={7}
                maxLength={32}
                name="password"
                onChange={handleInput}
                value={password}
                onBlur={handleInput}
              />
              <InputRegisterFormConfirm
                label="ConfirmPassword"
                type="password"
                autoComplete="true"
                required
                placeholder="Confirm Password"
                onChange={isCorrectpassword}
                value={confirmPassword}
                name="confirmPassword"
              />
              <BaseButton
                type="button"
                disabled={next || emailErorr !== '' || passwordError !== ''}
                onClick={nextClickButton}
              >
                Next
              </BaseButton>
            </>
          )}
          {page2 && (
            <>
              <InputRegisterForm
                label="Name"
                type="text"
                placeholder="Name"
                required
                onChange={handleInput}
                name="name"
                value={name}
              />
              <InputRegisterForm
                label="Location"
                type="text"
                placeholder="City, region"
                required
                onChange={handelChangeLocation}
                name="location"
                value={location}
              />
              {phoneDirty && (
                <ValidationContainerPhone>
                  {phoneError}
                </ValidationContainerPhone>
              )}
              <InputRegisterForm
                label="Phone"
                type="tel"
                placeholder="Mobile phone"
                required
                onChange={handleInput}
                name="phone"
                value={phone}
              />
              <ButtonsContainer>
                <RegisterButton
                  type="submit"
                  disabled={!name || !location || phoneError !== ''}
                >
                  Register
                </RegisterButton>

                <BaseButton type="button" onClick={backClickButton}>
                  Back
                </BaseButton>
              </ButtonsContainer>
              {arrayLocation && isOpen && (
                <RegisterLocationContainer>
                  {arrayLocation?.map((locate, index) => (
                    <li key={index}>
                      <RegisterButtonLocation onClick={handleButtonClick}>
                        <span>{locate.name}</span>
                        {'  '}
                        <span>{locate.regionArea}</span>
                      </RegisterButtonLocation>
                    </li>
                  ))}
                </RegisterLocationContainer>
              )}{' '}
              {notFoundCity && !arrayLocation && (
                <RegisterLocationContainer>
                  <li>
                    <RegisterButtonLocation>
                      There is no such city, try another
                    </RegisterButtonLocation>
                  </li>
                </RegisterLocationContainer>
              )}
            </>
          )}
          <TextRegisterForm>
            Already have an account?{' '}
            <LinkRegisterForm to="/login">Login</LinkRegisterForm>
          </TextRegisterForm>
        </RegisterForma>
      </RegisterContainer>
      <ToastContainer autoClose={3000} />
    </Background>
  );
}
