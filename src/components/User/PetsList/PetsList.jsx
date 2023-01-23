import { DeleteIcon } from './DeleteIcon';
import {
  UserPetAvatarImage,
  UserPetAvatarThumb,
  UserPetCard,
  UserPetCardWrapper,
  UserPetCategoryName,
  UserPetDeleteBtn,
  UserPetDescription,
  UserPetText,
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
  return (
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
          <UserPetDeleteBtn type="button" onClick={() => handleDeletePet(id)}>
            <DeleteIcon />
          </UserPetDeleteBtn>
        </UserPetDescription>
      </UserPetCardWrapper>
    </UserPetCard>
  );
};
