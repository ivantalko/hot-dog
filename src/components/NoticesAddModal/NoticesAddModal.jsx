import { useState } from 'react';
import {
  Backdrop,
  Modal,
  MaleIcon,
  FemaleIcon,
  // IconPlus,
  IconClose,
  ModalTitle,
  ModalTitleInfo,
  CategoryList,
  CategoryBtn,
  ParameterList,
  ParameterTitle,
  ParameterInput,
  ControlsBtnList,
  ControlsBtn,
  NextPageModal,
} from './NoticesAddModal.styled';

export const NoticesAddModal = ({ handleBackdropClose, setIsModalOpen }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const [breed, setBreed] = useState('');

  const [nextPageOpen, setNextPageOpen] = useState(false);

  const [pet, setPet] = useState({
    category: '',
    title: '',
    name: '',
    birth: '',
    breed: '',
  });

  const handleChangeParameter = e => {
    if (e.target.id === 'titleInput') {
      setTitle(e.target.value);
    }
    if (e.target.id === 'nameInput') {
      setName(e.target.value);
    }
    if (e.target.id === 'birthInput') {
      setBirth(e.target.value);
    }
    if (e.target.id === 'breedInput') {
      setBreed(e.target.value);
    }
  };

  const handleChoiseCategory = e => {
    setCategory(e.target.textContent);
  };

  const handleBtnCLoseModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  };

  const handleNextPage = () => {
    if (
      category !== '' &&
      title !== '' &&
      name !== '' &&
      birth !== '' &&
      breed !== ''
    ) {
      setPet({
        category: category,
        title: title,
        name: name,
        birth: birth,
        breed: breed,
      });
      setNextPageOpen(true);
    } else if (
      category === '' ||
      title === '' ||
      name === '' ||
      birth === '' ||
      breed === ''
    ) {
      console.log('all parameters must be set');
    }
    console.log(pet);
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      {!nextPageOpen && (
        <Modal id="mainPageModal">
          <IconClose onClick={handleBtnCLoseModal} />
          <ModalTitle>Add pet</ModalTitle>
          <ModalTitleInfo>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </ModalTitleInfo>

          <CategoryList>
            <li>
              <CategoryBtn onClick={handleChoiseCategory} type="button">
                lost/found
              </CategoryBtn>
            </li>
            <li>
              <CategoryBtn onClick={handleChoiseCategory} type="button">
                in good hands
              </CategoryBtn>
            </li>
            <li>
              <CategoryBtn onClick={handleChoiseCategory} type="button">
                sell
              </CategoryBtn>
            </li>
          </CategoryList>
          <ParameterList>
            <li>
              <ParameterTitle>
                Tittle of ad<span>*</span>
              </ParameterTitle>
              <ParameterInput
                id="titleInput"
                onChange={handleChangeParameter}
                type="text"
                placeholder="Type title"
              />
            </li>
            <li>
              <ParameterTitle>
                Name pet<span>*</span>
              </ParameterTitle>
              <ParameterInput
                id="nameInput"
                onChange={handleChangeParameter}
                type="text"
                placeholder="Type name pet"
              />
            </li>
            <li>
              <ParameterTitle>
                Date of birth<span>*</span>
              </ParameterTitle>
              <ParameterInput
                id="birthInput"
                onChange={handleChangeParameter}
                type="text"
                placeholder="Type date of birth"
              />
            </li>
            <li>
              <ParameterTitle>
                Breed<span>*</span>
              </ParameterTitle>
              <ParameterInput
                id="breedInput"
                onChange={handleChangeParameter}
                type="text"
                placeholder="Type breed"
              />
            </li>
          </ParameterList>
          <ControlsBtnList>
            <li>
              <ControlsBtn onClick={handleBtnCLoseModal}>Cancel</ControlsBtn>
            </li>
            <li>
              <ControlsBtn onClick={handleNextPage}>Next</ControlsBtn>
            </li>
          </ControlsBtnList>
        </Modal>
      )}
      {nextPageOpen && (
        <NextPageModal id="secondPageModal">
          <ModalTitle>Add pet</ModalTitle>
          <IconClose onClick={handleBtnCLoseModal} />
          <ul>
            <li>
              <ParameterTitle>
                The sex<span style={{ color: '#F59256' }}>*</span>:
              </ParameterTitle>
              <ul style={{ display: 'flex' }}>
                <li>
                  <input type="radio" name="sexMale" id="sexInputMale" />
                  <p>Male</p>
                </li>
                <li>
                  <input type="radio" name="sexFemle" id="sexInputFemale" />
                  <p>Female</p>
                </li>
              </ul>
            </li>
            <li>
              <ParameterTitle>
                Location<span style={{ color: '#F59256' }}>*</span>:
              </ParameterTitle>
              <input
                type="text"
                name="locationInput"
                id="locationInput"
                placeholder="Type pet location"
              />
            </li>
            <li>
              <ParameterTitle>
                Price<span style={{ color: '#F59256' }}>*</span>:
              </ParameterTitle>
              <input
                type="number"
                name="priceInput"
                id="priceInput"
                placeholder="Type pet price"
              />
            </li>
            <li>
              <ParameterTitle>Load the pet’s image</ParameterTitle>
              <input type="file" name="fileInput" id="fileInput" />
            </li>
            <li>
              <ParameterTitle>Comments</ParameterTitle>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </li>
          </ul>
          <ControlsBtnList>
            <li>
              <ControlsBtn onClick={handleBtnCLoseModal}>Cancel</ControlsBtn>
            </li>
            <li>
              <ControlsBtn onClick={handleNextPage}>Next</ControlsBtn>
            </li>
          </ControlsBtnList>
        </NextPageModal>
      )}
    </Backdrop>
  );
};
