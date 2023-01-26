import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNoticesDataNew } from 'redux/Notice/notice-operations';
import { useForm } from 'react-hook-form';
import {
  schemaAddModalPage2,
  notify,
} from 'helpers/validator/validationInputs';
import { yupResolver } from '@hookform/resolvers/yup';

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
  const [formData, setFormData] = useState('');

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

  useEffect(() => {
    setPet({
      title,
      name,
      birthday,
      breed,
      sex,
      location,
      price,
      category,
      comments,
    });
  }, [
    birthday,
    breed,
    category,
    comments,
    location,
    name,
    price,
    setPet,
    sex,
    title,
  ]);

  useEffect(() => {
    setFormData(new FormData());
  }, []);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaAddModalPage2),
  });

  const onSubmit = data => {
    if (data) {
      document.querySelector('body').classList.remove('modal');
      setIsModalOpen(false);

      formData.append('avatar', data.avatar[0]);
      formData.append('notice', JSON.stringify(pet));
      dispatch(getNoticesDataNew(formData));
    }
  };

  const onError = e => {
    const arr = ['location', 'price', 'comments', 'avatar', 'sex'];
    arr.map(item => notify(e[item]?.message));
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
                {...register('sex')}
                onClick={handleSexChoose}
                type="checkbox"
                id="sexInputMale"
              />
              <SexText id="SexMaleActive">Male</SexText>
            </SexItem>
            <SexItem>
              <FemaleIcon />
              <SexInput
                {...register('sex')}
                onClick={handleSexChoose}
                type="checkbox"
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
            {...register('location')}
            onChange={handleLocationSet}
            type="text"
            placeholder="Type pet location"
          />
        </ParameterItem>
        <ParameterItem>
          <ParameterTitle>
            Price<span style={{ color: '#F59256' }}>*</span>:
          </ParameterTitle>
          <SecondPageParameterInput
            {...register('price')}
            onChange={handleChangePrice}
            type="number"
            placeholder="Type pet price"
          />
        </ParameterItem>
        <ParameterItem>
          <ParameterTitle>Load the pet’s image</ParameterTitle>
          <AvatarInputBox>
            <IconPlus />
            <AvatarInput
              {...register('avatar')}
              onChange={previewFile}
              type="file"
              // id="fileInput"
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
            {...register('comments')}
            onChange={handleChangeComments}
            cols="30"
            rows="10"
          ></TextArea>
        </ParameterItem>
      </SecondPageParameterList>
      <ControlsBtnList>
        <ParameterItem>
          <ControlsBtn onClick={handleSubmit(onSubmit, onError)}>
            Done
          </ControlsBtn>
        </ParameterItem>
        <ParameterItem>
          <ControlsBtn onClick={handleToBackPage}>Back</ControlsBtn>
        </ParameterItem>
      </ControlsBtnList>
    </NextPageModal>
  );
};
