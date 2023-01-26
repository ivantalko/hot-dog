import { useState } from 'react';
import { NoticesAddModalPage1 } from 'components/NoticesAddModalPage1/NoticesAddModalPage1';
import { NoticesAddModalPage2 } from 'components/NoticesAddModalPage2/NoticesAddModalPage2';
import { Backdrop } from './NoticesAddModal.styled';
import { notify } from 'helpers/validator/validationInputs';

export const NoticesAddModal = ({
  handleBackdropClose,
  setIsModalOpen,
  pet,
  setPet,
}) => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [breed, setBreed] = useState('');

  const [nextPageOpen, setNextPageOpen] = useState(false);

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
    if (e.target.id === 'lostFound') {
      setCategory('lostFound');
      document.querySelector('#lostFound').classList.add('active');
      document.querySelector('#inGoodHands').classList.remove('active');
      document.querySelector('#sell').classList.remove('active');
    }
    if (e.target.id === 'inGoodHands') {
      setCategory('inGoodHands');
      document.querySelector('#lostFound').classList.remove('active');
      document.querySelector('#inGoodHands').classList.add('active');
      document.querySelector('#sell').classList.remove('active');
    }
    if (e.target.id === 'sell') {
      setCategory('sell');
      document.querySelector('#lostFound').classList.remove('active');
      document.querySelector('#inGoodHands').classList.remove('active');
      document.querySelector('#sell').classList.add('active');
    }
  };

  const handleBtnCLoseModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  };

  const handleNextPage = () => {
    if (category !== '') {
      setNextPageOpen(true);
      document.querySelector('#mainPageModal').classList.add('hidden');
      if (nextPageOpen) {
        document.querySelector('#secondPageModal').classList.remove('hidden');
      }
    } else if (category === '') {
      notify('Category must be set');
    }
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      <NoticesAddModalPage1
        pet={pet}
        setPet={setPet}
        handleBtnCLoseModal={handleBtnCLoseModal}
        handleChoiseCategory={handleChoiseCategory}
        handleChangeParameter={handleChangeParameter}
        handleNextPage={handleNextPage}
      />

      {nextPageOpen && (
        <NoticesAddModalPage2
          pet={pet}
          setPet={setPet}
          nextPageOpen={nextPageOpen}
          setIsModalOpen={setIsModalOpen}
          setNextPageOpen={setNextPageOpen}
          handleBtnCLoseModal={handleBtnCLoseModal}
          category={category}
          title={title}
          name={name}
          birthday={birthday}
          breed={breed}
        />
      )}
    </Backdrop>
  );
};
