import { DeleteIcon } from './DeleteIcon';
import {
  UserPetAvatarImage,
  UserPetAvatarThumb,
  UserPetCard,
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
      <div>
        <UserPetAvatarThumb>
          <UserPetAvatarImage src={avatarURL} alt={name} />
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
      </div>
    </UserPetCard>
  );
};
