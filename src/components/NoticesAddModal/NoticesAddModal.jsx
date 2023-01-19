import { useState } from 'react';
import {
  Backdrop,
  Modal,
  // MaleIcon,
  // FemaleIcon,
  // IconPlus,
  IconClose,
  ModalTitle,
  ModalTitleInfo,
  CategoryList,
  CategoryBtn,
  ParameterList,
  ParameterTitle,
  ParameterInput,
  ControlsBtn,
} from './NoticesAddModal.styled';

export const NoticesAddModal = ({ handleBackdropClose, setIsModalOpen }) => {
  const [pet, setPet] = useState({ category: '' });

  const handleBtnCLoseModal = () => {
    setIsModalOpen(false);
    document.querySelector('body').classList.remove('modal');
  };

  const handleChoiseCategory = e => {
    setPet({ category: e.target.textContent });
  };

  console.log(pet);

  return (
    <Backdrop onClick={handleBackdropClose}>
      <Modal>
        <IconClose onClick={handleBtnCLoseModal} />
        <ModalTitle>Add pet</ModalTitle>
        <ModalTitleInfo>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetur
        </ModalTitleInfo>

        <CategoryList>
          <li>
            <CategoryBtn onClick={handleChoiseCategory} type="button">
              lost/found
            </CategoryBtn>
          </li>
          <li>
            <CategoryBtn onClick={handleChoiseCategory} type="button">
              in good hands
            </CategoryBtn>
          </li>
          <li>
            <CategoryBtn onClick={handleChoiseCategory} type="button">
              sell
            </CategoryBtn>
          </li>
        </CategoryList>
        <ParameterList>
          <li>
            <ParameterTitle>
              Tittle of ad<span>*</span>
            </ParameterTitle>
            <ParameterInput type="text" placeholder="Type name" />
          </li>
          <li>
            <ParameterTitle>
              Name pet<span>*</span>
            </ParameterTitle>
            <ParameterInput type="text" placeholder="Type name pet" />
          </li>
          <li>
            <ParameterTitle>
              Date of birth<span>*</span>
            </ParameterTitle>
            <ParameterInput type="text" placeholder="Type date of birth" />
          </li>
          <li>
            <ParameterTitle>
              Breed<span>*</span>
            </ParameterTitle>
            <ParameterInput type="text" placeholder="Type breed" />
          </li>
        </ParameterList>
        <ul>
          <li>
            <ControlsBtn>Cancel</ControlsBtn>
          </li>
          <li>
            <ControlsBtn>Next</ControlsBtn>
          </li>
        </ul>
      </Modal>
    </Backdrop>
  );
};
