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
} from './UserPageModalAddPet.styled';

export const UserPageModalAddPet = ({
  handleBackdropClose,
  setIsModalOpen,
}) => {
  const [nextPageOpen, setNextPageOpen] = useState(false);
  const [pet, setPet] = useState({ name: '', birthday: '', breed: '' });

  const handleOpenSecondPage = e => {
    e.preventDefault();
    setNextPageOpen(true);
    document
      .querySelector('#userAddOwnPetModalMainPage')
      .classList.add('hidden');
  };

  console.log(pet);
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
              <CategoryInput type="text" placeholder="Type name pet" />
            </li>
            <li>
              <CategoryTitle>Date of birth</CategoryTitle>
              <CategoryInput type="text" placeholder="Type date of birth" />
            </li>
            <li>
              <CategoryTitle>Breed</CategoryTitle>
              <CategoryInput type="text" placeholder="Type breed" />
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
            <CategoryList>
              <li>
                <CategoryTitleSecondPage>
                  Add photo and some comments
                </CategoryTitleSecondPage>
                <CategoryInput type="text" placeholder="Type name pet" />
              </li>
              <li>
                <CategoryTitleSecondPage>Date of birth</CategoryTitleSecondPage>
                <CategoryInput type="text" placeholder="Type date of birth" />
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
        </ModalSecondPage>
      )}
    </Backdrop>
  );
};
