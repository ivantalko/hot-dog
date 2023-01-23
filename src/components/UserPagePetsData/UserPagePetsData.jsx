import { useState } from 'react';
import { useEffect } from 'react';
import {
  PetDataBox,
  PetsDataBoxTop,
  PetsDataTitle,
  AddBtnBox,
  AddBtnText,
  AddBtn,
  AddIcon,
  UserPetsList,
} from './UserPagePetsData.styled';
import { UserPageModalAddPet } from 'components/UserPageModalAddPet/UserPageModalAddPet';
import { useDispatch, useSelector } from 'react-redux';
import { selectPets } from 'redux/User/user-selectors';
import { PetsList } from 'components/User/PetsList/PetsList';
import { deleteUserPet } from 'redux/User/user-operation';

export const UserPagePetsData = () => {
  const pets = useSelector(selectPets);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleDeletePet = id => {
    dispatch(deleteUserPet(id));

    document.querySelector('body').classList.remove('modal');
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.querySelector('body').classList.add('modal');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };
  return (
    <PetDataBox>
      <PetsDataBoxTop>
        <PetsDataTitle>My Pets:</PetsDataTitle>
        <AddBtnBox onClick={handleModalOpen}>
          <AddBtnText>Add pet</AddBtnText>
          <AddBtn type="button">
            <AddIcon />
          </AddBtn>
        </AddBtnBox>
      </PetsDataBoxTop>
      <UserPetsList>
        {pets &&
          pets.map(({ _id, ...other }) => (
            <PetsList
              key={_id}
              handleDeletePet={handleDeletePet}
              id={_id}
              {...other}
            />
          ))}
      </UserPetsList>
      {isModalOpen && (
        <div>
          <UserPageModalAddPet
            handleBackdropClose={handleBackdropClose}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
    </PetDataBox>
  );
};
