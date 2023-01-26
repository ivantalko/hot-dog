import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postUserPet } from 'redux/User/user-operation';
import {
  Backdrop,
  ModalMainPage,
  ModalSecondPage,
  IconClose,
  CloseBtn,
  MainPageModalTitle,
  CategoryList,
  CategoryTitle,
  CategoryTitleSecondPage,
  CategoryInput,
  ControlsList,
  ControlsBtn,
  SecondPageModalTitle,
  AvatarInputBox,
  IconPlus,
  AvatarInput,
  CategoryListSecondPage,
  TextArea,
  CategoryCommentsTitle,
} from './UserPageModalAddPet.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  schemaUserPageModalAddPetFirstPage,
  schemaUserPageModalAddPetSecondPage,
  notify,
} from 'helpers/validator/yupValidation';

export const UserPageModalAddPet = ({
  handleBackdropClose,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch();
  const [nextPageOpen, setNextPageOpen] = useState(false);
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [comments, setComments] = useState('');
  const [formData, setFormData] = useState('');
  const [schema, setSchema] = useState('');

  useEffect(() => {
    setFormData(new FormData());
  }, []);

  useEffect(() => {
    if (!nextPageOpen) {
      setSchema(schemaUserPageModalAddPetFirstPage);
    } else if (nextPageOpen) {
      setSchema(schemaUserPageModalAddPetSecondPage);
    }
  }, [nextPageOpen]);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    if (data && !nextPageOpen) {
      setNextPageOpen(true);
      document
        .querySelector('#userAddOwnPetModalMainPage')
        .classList.add('hidden');
      if (nextPageOpen) {
        document
          .querySelector('#userAddOwnPetModalSecondPage')
          .classList.remove('hidden');
      }
    } else if (data && nextPageOpen) {
      formData.append('avatar', data.avatar[0]);
      formData.append(
        'data',
        JSON.stringify({
          name,
          birthday,
          breed,
          comments,
        })
      );
      const response = await dispatch(postUserPet(formData));
      if (response.meta.requestStatus === 'fulfilled') {
        setIsModalOpen(false);
        document.querySelector('body').classList.remove('modal');
      }
    }
  };

  const onError = e => {
    console.log(e);
    const arr = ['name', 'date', 'breed', 'avatar', 'comments'];
    arr.map(item => notify(e[item]?.message));
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

  const handleBackBtn = e => {
    setNextPageOpen(false);
    e.preventDefault();
    document
      .querySelector('#userAddOwnPetModalSecondPage')
      .classList.add('hidden');
    document
      .querySelector('#userAddOwnPetModalMainPage')
      .classList.remove('hidden');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleBirthdayChange = e => {
    setBirthday(e.target.value);
  };
  const handleBreedChange = e => {
    setBreed(e.target.value);
  };
  const handleCommentsChange = e => {
    setComments(e.target.value);
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      <ModalMainPage id="userAddOwnPetModalMainPage">
        <CloseBtn
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          <IconClose />
        </CloseBtn>
        <MainPageModalTitle>Add pet</MainPageModalTitle>
        <form>
          <CategoryList>
            <li>
              <CategoryTitle>Name pet</CategoryTitle>
              <CategoryInput
                {...register('name')}
                type="text"
                placeholder="Type name pet"
                value={name}
                onChange={handleNameChange}
              />
            </li>
            <li>
              <CategoryTitle>Date of birth</CategoryTitle>
              <CategoryInput
                {...register('date')}
                type="text"
                value={birthday}
                onChange={handleBirthdayChange}
                placeholder="Type date of birth"
              />
            </li>
            <li>
              <CategoryTitle>Breed</CategoryTitle>
              <CategoryInput
                {...register('breed')}
                type="text"
                value={breed}
                onChange={handleBreedChange}
                placeholder="Type breed"
              />
            </li>
          </CategoryList>
          <ControlsList>
            <li>
              <ControlsBtn onClick={handleSubmit(onSubmit, onError)}>
                Next
              </ControlsBtn>
            </li>
            <li>
              <ControlsBtn
                onClick={e => {
                  e.preventDefault();
                  setIsModalOpen(false);
                  document.querySelector('body').classList.remove('modal');
                }}
              >
                Cancel
              </ControlsBtn>
            </li>
          </ControlsList>
        </form>
      </ModalMainPage>
      {nextPageOpen && (
        <ModalSecondPage id="userAddOwnPetModalSecondPage">
          <CloseBtn
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <IconClose />
          </CloseBtn>
          <SecondPageModalTitle>Add pet</SecondPageModalTitle>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <CategoryListSecondPage>
              <li style={{ display: 'block', textAlign: 'center' }}>
                <CategoryTitleSecondPage>
                  Add photo and some comments
                </CategoryTitleSecondPage>
                <AvatarInputBox>
                  <IconPlus />
                  <AvatarInput
                    {...register('avatar')}
                    onChange={previewFile}
                    type="file"
                    name="avatar"
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
              </li>
              <li>
                <CategoryCommentsTitle>Comments</CategoryCommentsTitle>
                <TextArea
                  {...register('comments')}
                  onChange={handleCommentsChange}
                  cols="30"
                  rows="10"
                ></TextArea>
              </li>
            </CategoryListSecondPage>
            <ControlsList>
              <li>
                <ControlsBtn type="submit">Done</ControlsBtn>
              </li>
              <li>
                <ControlsBtn onClick={handleBackBtn}>Back</ControlsBtn>
              </li>
            </ControlsList>
          </form>
        </ModalSecondPage>
      )}
    </Backdrop>
  );
};
