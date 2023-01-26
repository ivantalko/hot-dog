import axios from 'axios';
import { RegisterButtonLocation } from 'components/RegisterForm/RegisterForm.styled';
import { LOCATIONWRAPPER } from 'components/User/UserCard/UserInfo/UserInfo.styled';
import { useMemo, useState } from 'react';

import {
  NextPageModal,
  ModalTitle,
  IconClose,
  SecondPageParameterList,
  ParameterTitle,
  SexList,
  SexItem,
  MaleIcon,
  SexInput,
  SexText,
  FemaleIcon,
  ParameterItem,
  SecondPageParameterInput,
  AvatarInputBox,
  IconPlus,
  AvatarInput,
  TextArea,
  ControlsBtnList,
  ControlsBtn,
  PreviewImg,
  LocationListWrapper,
  NoticeLOcation,
} from './NoticesAddModalPage2.styled';

export const NoticesAddModalPage2 = ({ handleBtnCLoseModal, nextPageOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notFoundCity, setNotFoundCity] = useState(false);
  const [arrayLocation, setArrayLocation] = useState('');

  // const [sex, setSex] = useState('');
  const [comments, setComments] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [chooseAvatar, setChooseAvatar] = useState(false);

  const handleSexChoose = e => {
    if (e.target.id === 'sexInputMale') {
      // setSex('male');
      document.querySelector('#SexMaleActive').classList.add('active');
      document.querySelector('#SexFemaleActive').classList.remove('active');
      document.querySelector('#sexInputFemale').checked = false;
    } else if (e.target.id === 'sexInputFemale') {
      // setSex('female');
      document.querySelector('#SexMaleActive').classList.remove('active');
      document.querySelector('#SexFemaleActive').classList.add('active');
      document.querySelector('#sexInputMale').checked = false;
    }
    e.target.checked = true;
  };

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

  const handleLocationSet = e => {
    const { value } = e.target;
    const query = value.trim();
    setLocation(query);
    setIsOpen(true);
    if (query) fetchProducts(query);
    if (!location) {
      setArrayLocation(false);
      setNotFoundCity(true);
      return;
    }
  };
  const handleChangePrice = e => {
    setPrice(e.target.value);
  };
  const handleChangeComments = e => {
    setComments(e.target.value);
  };

  const handleToBackPage = () => {
    if (nextPageOpen) {
      document.querySelector('#secondPageModal').classList.add('hidden');
    }
    document.querySelector('#mainPageModal').classList.remove('hidden');
  };

  function previewFile(e) {
    let preview = document.querySelector('#imagePreview');
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = '';
    }
  }

  const handleButtonClick = e => {
    setLocation(e.currentTarget.innerText);
    setIsOpen(false);
  };

  return (
    <NextPageModal id="secondPageModal">
      <ModalTitle>Add pet</ModalTitle>
      <IconClose onClick={handleBtnCLoseModal} />
      <SecondPageParameterList>
        <li>
          <ParameterTitle>
            The sex<span style={{ color: '#F59256' }}>*</span>:
          </ParameterTitle>
          <SexList style={{ display: 'flex' }}>
            <SexItem>
              <MaleIcon />
              <SexInput
                onClick={handleSexChoose}
                type="checkbox"
                name="sexMale"
                id="sexInputMale"
                value={'male'}
              />
              <SexText id="SexMaleActive">Male</SexText>
            </SexItem>
            <SexItem>
              <FemaleIcon />
              <SexInput
                onClick={handleSexChoose}
                type="checkbox"
                name="sexFemle"
                id="sexInputFemale"
                value={'female'}
              />
              <SexText id="SexFemaleActive">Female</SexText>
            </SexItem>
          </SexList>
        </li>
        <LOCATIONWRAPPER>
          <ParameterItem>
            <ParameterTitle>
              Location<span style={{ color: '#F59256' }}>*</span>:
            </ParameterTitle>

            <SecondPageParameterInput
              value={location}
              onChange={handleLocationSet}
              type="text"
              name="locationInput"
              id="locationInput"
              placeholder="Type pet location"
            />
          </ParameterItem>
          <LocationListWrapper>
            {arrayLocation && isOpen && (
              <NoticeLOcation>
                {arrayLocation?.map((locate, index) => (
                  <li key={index}>
                    <RegisterButtonLocation
                      type="button"
                      onClick={handleButtonClick}
                    >
                      <span>{locate.name}</span>
                      {',  '}
                      <span>{locate.regionArea}</span>
                    </RegisterButtonLocation>
                  </li>
                ))}
              </NoticeLOcation>
            )}
            {isOpen && notFoundCity && !arrayLocation && (
              <NoticeLOcation>
                <li>
                  <RegisterButtonLocation type="button">
                    There is no such city, try another
                  </RegisterButtonLocation>
                </li>
              </NoticeLOcation>
            )}
          </LocationListWrapper>
        </LOCATIONWRAPPER>
        <ParameterItem>
          <ParameterTitle>
            Price<span style={{ color: '#F59256' }}>*</span>:
          </ParameterTitle>
          <SecondPageParameterInput
            value={price}
            onChange={handleChangePrice}
            type="text"
            name="priceInput"
            id="priceInput"
            placeholder="Type pet price"
            pattern="^[1-9]+[0-9]*$"
            required
          />
        </ParameterItem>
        <ParameterItem>
          <ParameterTitle>Load the pet’s image</ParameterTitle>
          <AvatarInputBox>
            <IconPlus />
            <AvatarInput
              onClick={() => {
                setChooseAvatar(true);
              }}
              onChange={previewFile}
              type="file"
              name="fileInput"
              id="fileInput"
            />
            <PreviewImg
              style={{
                position: 'absolute',
                borderRadius: 'inherit',
                padding: '1px',
                boxShadow: '0px 0px 4px #f59256',
                cursor: 'pointer',
                pointerEvents: 'none',
              }}
              chooseAvatar={chooseAvatar}
              id="imagePreview"
              src=""
              alt=""
            />
          </AvatarInputBox>
        </ParameterItem>
        <ParameterItem>
          <ParameterTitle>Comments</ParameterTitle>
          <TextArea
            onChange={handleChangeComments}
            value={comments}
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            minLength={8}
            maxLength={120}
            required
          ></TextArea>
        </ParameterItem>
      </SecondPageParameterList>

      <ControlsBtnList>
        <ParameterItem>
          <ControlsBtn type="submit" disabled={isOpen ? true : false}>
            Done
          </ControlsBtn>
        </ParameterItem>
        <ParameterItem>
          <ControlsBtn type="button" onClick={handleToBackPage}>
            Back
          </ControlsBtn>
        </ParameterItem>
      </ControlsBtnList>
    </NextPageModal>
  );
};
