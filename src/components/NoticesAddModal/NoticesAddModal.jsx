import { useState } from 'react';
import {
  Backdrop,
  Modal,
  IconPlus,
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
  SexInput,
  MaleIcon,
  FemaleIcon,
  SexItem,
  SexText,
  SexList,
  SecondPageParameterInput,
  SecondPageParameterList,
  ParameterItem,
  TextArea,
  AvatarInputBox,
  AvatarInput,
} from './NoticesAddModal.styled';

export const NoticesAddModal = ({ handleBackdropClose, setIsModalOpen }) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');
  const [sex, setSex] = useState('');

  const [nextPageOpen, setNextPageOpen] = useState(false);

  const [pet, setPet] = useState({
    category: '',
    title: '',
    name: '',
    birthday: '',
    breed: '',
  });

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

  const handleChangeParameter = e => {
    if (e.target.id === 'titleInput') {
      setTitle(e.target.value);
    }
    if (e.target.id === 'nameInput') {
      setName(e.target.value);
    }
    if (e.target.id === 'birthInput') {
      setBirthday(e.target.value);
    }
    if (e.target.id === 'breedInput') {
      setBreed(e.target.value);
    }
  };

  const handleChoiseCategory = e => {
    if (e.target.textContent === 'lost/found') {
      setCategory('lostFound');
    }
    if (e.target.textContent === 'in good hands') {
      setCategory('inGoodHands');
    }
    if (e.target.textContent === 'sell') {
      setCategory('sell');
    }
  };

  console.log(pet);

  const handleBtnCLoseModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  };

  const handleNextPage = () => {
    if (
      category !== '' &&
      title !== '' &&
      name !== '' &&
      birthday !== '' &&
      breed !== ''
    ) {
      setPet({
        category: category,
        title: title,
        name: name,
        birthday: birthday,
        breed: breed,
      });
      setNextPageOpen(true);
    } else if (
      category === '' ||
      title === '' ||
      name === '' ||
      birthday === '' ||
      breed === ''
    ) {
      console.log('all parameters must be set');
    }
    console.log(pet);
  };

  const handleToBackPage = () => {
    setNextPageOpen(false);
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
                <AvatarInput type="file" name="fileInput" id="fileInput" />
              </AvatarInputBox>
            </ParameterItem>
            <ParameterItem>
              <ParameterTitle>Comments</ParameterTitle>
              <TextArea name="" id="" cols="30" rows="10"></TextArea>
            </ParameterItem>
          </SecondPageParameterList>

          <ControlsBtnList>
            <ParameterItem>
              <ControlsBtn>Done</ControlsBtn>
            </ParameterItem>
            <ParameterItem>
              <ControlsBtn onClick={handleToBackPage}>Back</ControlsBtn>
            </ParameterItem>
          </ControlsBtnList>
        </NextPageModal>
      )}
    </Backdrop>
  );
};
