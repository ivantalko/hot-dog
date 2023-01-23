import {
  ConfirmBackdrop,
  ConfirmText,
  ConfirmBtnList,
  ConfirmBtn,
  ConfirmModal,
} from './ConfirmModalComponent.styled';

export const ConfirmModalComponent = ({
  handleOpenConfirmModal,
  handleBackdropClose,
}) => {
  return (
    <ConfirmBackdrop onClick={handleBackdropClose}>
      <ConfirmModal>
        <ConfirmText>Confirm to delete pet's notice?</ConfirmText>
        <ConfirmBtnList>
          <ConfirmBtn
          // onClick={() => handleDeletePet(id)}
          >
            Yes
          </ConfirmBtn>
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
  );
};
