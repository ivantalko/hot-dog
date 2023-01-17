import { ModalNoticeBackdrop } from './ModalNotice.js';

export const ModalNotice = ({ handleBackdropClose }) => {
  return (
    <ModalNoticeBackdrop handleBackdropClose onClick={handleBackdropClose}>
      <button>X</button>
      <span>category</span>
      <img src="" alt="" />
    </ModalNoticeBackdrop>
  );
};
