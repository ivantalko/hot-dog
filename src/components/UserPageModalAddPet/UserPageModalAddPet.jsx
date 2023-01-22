import { useState } from 'react';
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

export const UserPageModalAddPet = ({
  handleBackdropClose,
  setIsModalOpen,
}) => {
  const [nextPageOpen, setNextPageOpen] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [comments, setComments] = useState('');
  const [pet, setPet] = useState({
    avatar: '',
    name: '',
    birthday: '',
    breed: '',
    comments: '',
  });

  const handleOpenSecondPage = e => {
    e.preventDefault();
    setNextPageOpen(true);
    document
      .querySelector('#userAddOwnPetModalMainPage')
      .classList.add('hidden');
  };

  function previewFile(e) {
    let preview = document.querySelector('#imagePreview');
    let file = e.target.files[0];
    setAvatar(file);
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

  const handleDoneAddPet = e => {
    e.preventDefault();
    if (
      name !== '' &&
      birthday !== '' &&
      breed !== '' &&
      comments !== '' &&
      avatar !== ''
    ) {
      setPet({
        avatar: avatar,
        name: name,
        birthday: birthday,
        breed: breed,
        comments: comments,
      });
      console.log(pet);
    }
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
                type="text"
                placeholder="Type name pet"
                value={name}
                onChange={handleNameChange}
              />
            </li>
            <li>
              <CategoryTitle>Date of birth</CategoryTitle>
              <CategoryInput
                type="text"
                value={birthday}
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
              />
            </li>
          </CategoryList>
          <ControlsList>
            <li>
              <ControlsBtn onClick={handleOpenSecondPage}>Next</ControlsBtn>
            </li>
            <li>
              <ControlsBtn>Cancel</ControlsBtn>
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
          <form>
            <CategoryListSecondPage>
              <li style={{ display: 'block', textAlign: 'center' }}>
                <CategoryTitleSecondPage>
                  Add photo and some comments
                </CategoryTitleSecondPage>
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
                ></TextArea>
              </li>
            </CategoryListSecondPage>
            <ControlsList>
              <li>
                <ControlsBtn onClick={handleDoneAddPet}>Done</ControlsBtn>
              </li>
              <li>
                <ControlsBtn>Back</ControlsBtn>
              </li>
            </ControlsList>
          </form>
        </ModalSecondPage>
      )}
    </Backdrop>
  );
};
