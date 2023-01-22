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
} from './UserPagePetsData.styled';
import { UserPageModalAddPet } from 'components/UserPageModalAddPet/UserPageModalAddPet';

export const UserPagePetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
