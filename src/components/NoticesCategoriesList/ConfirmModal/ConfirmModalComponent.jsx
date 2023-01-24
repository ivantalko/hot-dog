import {
  ConfirmBackdrop,
  ConfirmText,
  ConfirmBtnList,
  ConfirmBtn,
  ConfirmModal,
} from './ConfirmModalComponent.styled';

export const ConfirmModalComponent = ({
  handleNoticeDelete,
  handleBackdropClose,
  openConfirmModalId,
  handleCloseConfirmModal,
}) => {
  return (
    <ConfirmBackdrop onClick={handleBackdropClose}>
      <ConfirmModal>
        <ConfirmText>Confirm to delete pet's notice?</ConfirmText>
        <ConfirmBtnList>
          <ConfirmBtn
            onClick={() => {
              handleNoticeDelete(openConfirmModalId);
              handleCloseConfirmModal();
            }}
          >
            Yes
          </ConfirmBtn>
          <ConfirmBtn onClick={handleCloseConfirmModal}>Cancel</ConfirmBtn>
        </ConfirmBtnList>
      </ConfirmModal>
    </ConfirmBackdrop>
  );
};
