import Background from 'components/Background';
import BaseButton from 'components/BaseButton';
import { useState } from 'react';

import {
  ButtonsContainer,
  InputRegisterForm,
  LinkRegisterForm,
  RegisterButton,
  RegisterContainer,
  RegisterForma,
  TextRegisterForm,
  TitleRegisterForm,
} from './RegisterForm.styled';

export default function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  //   const dispatch = useDispatch();
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [next, setNext] = useState(true);
  const [location, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const inputs = {
    email: setEmail,
    password: setPassword,
    location: setCity,
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
      return;
    }
    return setNext(true);
  };
  const handleInput = e => {
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
    console.log(userInfo);
    // dispatch(register(userInfo))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(login({ email, password }));
    //     notifySuccess();
    //   })
    // .catch(error => console.error(error));
    setEmail('');
    setPassword('');
    setCity('');
    setName('');
    setPhone('');
  };

  return (
    <Background>
      <RegisterContainer>
        <TitleRegisterForm>Registration</TitleRegisterForm>
        <RegisterForma onSubmit={handleFormSubmit}>
          {page1 && (
            <>
              <InputRegisterForm
                placeholder="Email"
                label="Email"
                type="email"
                required
                onChange={handleInput}
                name="email"
                value={email}
              />
              <InputRegisterForm
                label="Password"
                type="password"
                placeholder="Password"
                required
                onChange={handleInput}
                name="password"
                value={password}
              />
              <InputRegisterForm
                type="password"
                autoComplete="true"
                required
                placeholder="Confirm Password"
                onChange={isCorrectpassword}
              />

              <BaseButton disabled={next} onClick={nextClickButton}>
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
                onChange={handleInput}
                name="location"
                value={location}
              />
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
                <RegisterButton type="submit">Register</RegisterButton>

                <BaseButton type="button" onClick={backClickButton}>
                  Back
                </BaseButton>
              </ButtonsContainer>
            </>
          )}
          <TextRegisterForm>
            Already have an account?{' '}
            <LinkRegisterForm to="/login">Login</LinkRegisterForm>
          </TextRegisterForm>
        </RegisterForma>
      </RegisterContainer>
    </Background>
  );
}
