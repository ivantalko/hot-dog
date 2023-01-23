import { DeleteIcon } from './DeleteIcon';
import { useState } from 'react';
import {
  UserPetAvatarImage,
  UserPetAvatarThumb,
  UserPetCard,
  UserPetCardWrapper,
  UserPetCategoryName,
  UserPetDeleteBtn,
  UserPetDescription,
  UserPetText,
  ConfirmBackdrop,
  ConfirmModal,
  PetName,
  ConfirmText,
  ConfirmBtn,
  ConfirmBtnList,
} from './PetsList.styled';

export const PetsList = ({
  handleDeletePet,
  id,
  name,
  comments,
  breed,
  birthday,
  avatarURL,
}) => {
  const [openConfirmModal, setOpenConfirmModal] = useState();

  const handleOpenConfirmModal = () => {
    const body = document.querySelector('body');
    setOpenConfirmModal(!openConfirmModal);
    body.classList.add('modal');
  };

  console.log(document.querySelector('body'));

  return (
    <>
      <UserPetCard key={id}>
        <UserPetCardWrapper>
          <UserPetAvatarThumb>
            <UserPetAvatarImage
              src={avatarURL}
              alt={name}
              loading="lazy"
              height="161px"
            />
          </UserPetAvatarThumb>
          <UserPetDescription>
            <div>
              <UserPetText>
                <UserPetCategoryName>Name: </UserPetCategoryName>
                {name}
              </UserPetText>
              <UserPetText>
                <UserPetCategoryName>Date of birth: </UserPetCategoryName>
                {birthday}
              </UserPetText>
              <UserPetText>
                <UserPetCategoryName>Breed: </UserPetCategoryName>
                {breed}
              </UserPetText>
              <UserPetText>
                <UserPetCategoryName>Comments: </UserPetCategoryName>
                {comments}
              </UserPetText>
            </div>
            <UserPetDeleteBtn type="button" onClick={handleOpenConfirmModal}>
              <DeleteIcon />
            </UserPetDeleteBtn>
          </UserPetDescription>
        </UserPetCardWrapper>
      </UserPetCard>
      {openConfirmModal && (
        <ConfirmBackdrop>
          <ConfirmModal>
            <ConfirmText>
              Confirm to delete <PetName>{name}'s</PetName>
              pet card
            </ConfirmText>
            <ConfirmBtnList>
              <ConfirmBtn onClick={() => handleDeletePet(id)}>Yes</ConfirmBtn>
              <ConfirmBtn
                onClick={() => {
                  handleOpenConfirmModal();
                  document.querySelector('body').classList.remove('modal');
                }}
              >
                Cancel
              </ConfirmBtn>
            </ConfirmBtnList>
          </ConfirmModal>
        </ConfirmBackdrop>
      )}
    </>
  );
};
