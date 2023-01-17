import { ModalNoticeBackdrop } from './ModalNotice.js';

export const ModalNotice = ({ handleBackdropClose }) => {
  return (
    <ModalNoticeBackdrop handleBackdropClose onClick={handleBackdropClose}>
      ModalNotice
    </ModalNoticeBackdrop>
  );
};
