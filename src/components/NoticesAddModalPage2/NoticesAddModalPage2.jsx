import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNoticesDataNew } from 'redux/Notice/notice-operations';

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
} from './NoticesAddModalPage2.styled';

export const NoticesAddModalPage2 = ({
  handleBtnCLoseModal,
  setIsModalOpen,
  nextPageOpen,
  category,
  title,
  name,
  birthday,
  breed,
  pet,
  setPet,
}) => {
  const [sex, setSex] = useState('');
  const [comments, setComments] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSexChoose = e => {
    if (e.target.id === 'sexInputMale') {
      setSex('male');
      document.querySelector('#SexMaleActive').classList.add('active');
      document.querySelector('#SexFemaleActive').classList.remove('active');
      document.querySelector('#sexInputFemale').checked = false;
    } else if (e.target.id === 'sexInputFemale') {
      setSex('female');
      document.querySelector('#SexMaleActive').classList.remove('active');
      document.querySelector('#SexFemaleActive').classList.add('active');
      document.querySelector('#sexInputMale').checked = false;
    }
    e.target.checked = true;
  };

  const handleNoticeDone = () => {
    if (
      pet !==
      {
        title: '',
        name: '',
        birthday: '',
        breed: '',
        sex: '',
        location: '',
        price: '',
        category: '',
        comments: '',
      }
    ) {
      setPet({
        title: title,
        name: name,
        birthday: birthday,
        breed: breed,
        sex: sex,
        location: location,
        price: price,
        category: category,
        comments: comments,
      });
      console.log('notices is done');

      document.querySelector('body').classList.remove('modal');
      setIsModalOpen(false);

      const notice = {
        name: 'govnaKusok',
        birthday: '12-02-2001',
        breed: 'zaluped',
        title: 'Huilo',
        location: 'govno',
        price: '500',
        category: 'lostFound',
        comments: 'jaskdjalksdjlkasjklj',
      };

      const formData = new FormData();
      const avatar = document.querySelector('#fileInput').files[0];
      formData.append('avatar', avatar);
      formData.append('notice', JSON.stringify(notice));

      dispatch(getNoticesDataNew(formData));
    }
  };

  const handleLocationSet = e => {
    setLocation(e.target.value);
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
    // setNextPageOpen(false);
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
              />
              <SexText id="SexFemaleActive">Female</SexText>
            </SexItem>
          </SexList>
        </li>
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
        <ParameterItem>
          <ParameterTitle>
            Price<span style={{ color: '#F59256' }}>*</span>:
          </ParameterTitle>
          <SecondPageParameterInput
            value={price}
            onChange={handleChangePrice}
            type="number"
            name="priceInput"
            id="priceInput"
            placeholder="Type pet price"
          />
        </ParameterItem>
        <ParameterItem>
          <ParameterTitle>Load the pet’s image</ParameterTitle>
          <AvatarInputBox>
            <IconPlus />
            <AvatarInput
              onChange={previewFile}
              type="file"
              name="fileInput"
              id="fileInput"
            />
            <img
              style={{
                position: 'absolute',
                borderRadius: 'inherit',
                padding: '1px',
                boxShadow: '0px 0px 4px #f59256',
                cursor: 'pointer',
                pointerEvents: 'none',
              }}
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
            name=""
            id=""
            cols="30"
            rows="10"
          ></TextArea>
        </ParameterItem>
      </SecondPageParameterList>

      <ControlsBtnList>
        <ParameterItem>
          <ControlsBtn onClick={handleNoticeDone}>Done</ControlsBtn>
        </ParameterItem>
        <ParameterItem>
          <ControlsBtn onClick={handleToBackPage}>Back</ControlsBtn>
        </ParameterItem>
      </ControlsBtnList>
    </NextPageModal>
  );
};
