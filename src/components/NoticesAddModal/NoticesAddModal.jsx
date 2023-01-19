import {
  Backdrop,
  Modal,
  MaleIcon,
  FemaleIcon,
  IconPlus,
  IconClose,
} from './NoticesAddModal.styled';

export const NoticesAddModal = ({ handleBackdropClose, setIsModalOpen }) => {
  const handleBtnCLoseModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      <Modal>MODAL FORM</Modal>
    </Backdrop>
  );
};
