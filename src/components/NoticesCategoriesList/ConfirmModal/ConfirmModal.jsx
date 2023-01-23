import {
  ConfirmBackdrop,
  ConfirmText,
  PetName,
  ConfirmBtnList,
  ConfirmBtn,
} from './ConfirmModal.styled';

export const ConfirmModal = ({ handleOpenConfirmModal }) => {
  return (
    <ConfirmBackdrop>
      <ConfirmModal>
        <ConfirmText>
          Confirm to delete{' '}
          <PetName>
            {/* {name} */}
            's
          </PetName>
          pet card
        </ConfirmText>
        <ConfirmBtnList>
          <ConfirmBtn
          // onClick={() => handleDeletePet(id)}
          >
            Yes
          </ConfirmBtn>
          <ConfirmBtn
            onClick={() => {
              handleOpenConfirmModal();
              //   document.querySelector('body').classList.remove('modal');
            }}
          >
            Cancel
          </ConfirmBtn>
        </ConfirmBtnList>
      </ConfirmModal>
    </ConfirmBackdrop>
  );
};
