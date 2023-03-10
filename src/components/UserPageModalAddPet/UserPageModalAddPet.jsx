import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
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
  PreviewImg,
} from './UserPageModalAddPet.styled';

export const UserPageModalAddPet = ({
  handleBackdropClose,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch();
  const [nextPageOpen, setNextPageOpen] = useState(false);

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState(null);
  const [breed, setBreed] = useState('');
  const [comments, setComments] = useState('');
  const [chooseAvatar, setChooseAvatar] = useState(false);

  const handleOpenSecondPage = e => {
    e.preventDefault();
    if (name !== '' && birthday !== '' && breed !== '') {
      setNextPageOpen(true);
      document
        .querySelector('#userAddOwnPetModalMainPage')
        .classList.add('hidden');
      if (nextPageOpen) {
        document
          .querySelector('#userAddOwnPetModalSecondPage')
          .classList.remove('hidden');
      }
    } else {
      toast.info('All parameters must be set');
    }
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
    setBirthday(convertDate(e.target.value));
  };
  const handleBreedChange = e => {
    setBreed(e.target.value);
  };
  const handleCommentsChange = e => {
    setComments(e.target.value);
  };
  const convertDate = date => {
    if (!date?.length) return;
    const d = date?.split('-');

    return ([d[0], d[1], d[2]] = [d[2], d[1], d[0]].join('.'));
  };

  const handleDoneAddPet = async e => {
    e.preventDefault();
    if (name !== '' && birthday !== '' && breed !== '' && comments !== '') {
      const formData = new FormData();
      formData.append('avatar', e.target.avatar.files[0]);
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
    } else {
      toast.info('All parameters must be set');
    }
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      <ToastContainer autoClose={4000} />
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
                type="text"
                placeholder="Type name pet"
                value={name}
                onChange={handleNameChange}
                pattern="^[a-zA-Z]+$"
                minLength={2}
                maxLength={16}
              />
            </li>
            <li>
              <CategoryTitle>Date of birth</CategoryTitle>
              <CategoryInput
                type="date"
                onChange={handleBirthdayChange}
                placeholder="Type date of birth"
              />
            </li>
            <li>
              <CategoryTitle>Breed</CategoryTitle>
              <CategoryInput
                type="text"
                value={breed}
                onChange={handleBreedChange}
                placeholder="Type breed"
                pattern="^[a-zA-Z]+$"
                minLength={2}
                maxLength={16}
              />
            </li>
          </CategoryList>
          <ControlsList>
            <li>
              <ControlsBtn onClick={handleOpenSecondPage}>Next</ControlsBtn>
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
          <form onSubmit={handleDoneAddPet}>
            <CategoryListSecondPage>
              <li style={{ display: 'block', textAlign: 'center' }}>
                <CategoryTitleSecondPage>
                  Add photo and some comments
                </CategoryTitleSecondPage>
                <AvatarInputBox>
                  <IconPlus />
                  <AvatarInput
                    onClick={() => {
                      setChooseAvatar(true);
                    }}
                    onChange={previewFile}
                    type="file"
                    name="avatar"
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
              </li>
              <li>
                <CategoryCommentsTitle>Comments</CategoryCommentsTitle>
                <TextArea
                  onChange={handleCommentsChange}
                  value={comments}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  minLength={8}
                  maxLength={120}
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
