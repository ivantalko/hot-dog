import {
  Backdrop,
  Modal,
  // MaleIcon,
  // FemaleIcon,
  // IconPlus,
  IconClose,
  ModalTitle,
  ModalTitleInfo,
} from './NoticesAddModal.styled';

export const NoticesAddModal = ({ handleBackdropClose, setIsModalOpen }) => {
  const handleBtnCLoseModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      <Modal>
        <IconClose onClick={handleBtnCLoseModal} />
        <ModalTitle>Add pet</ModalTitle>
        <ModalTitleInfo>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur{' '}
        </ModalTitleInfo>
        <ul>
          <li>
            <button type="button">lost/found</button>
          </li>
          <li>
            <button type="button">in good hands</button>
          </li>
          <li>
            <button type="button">sell</button>
          </li>
        </ul>
      </Modal>
    </Backdrop>
  );
};
