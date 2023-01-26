import {
  Modal,
  IconClose,
  ModalTitle,
  ModalTitleInfo,
  CategoryList,
  CategoryBtn,
  ParameterList,
  ParameterTitle,
  ParameterInput,
  ControlsBtnList,
  ControlsBtn,
} from './NoticesAddModalPage1.styled';
import { useForm } from 'react-hook-form';
import {
  schemaAddModalPage1,
  notify,
} from 'helpers/validator/validationInputs';
import { yupResolver } from '@hookform/resolvers/yup';

export const NoticesAddModalPage1 = ({
  handleBtnCLoseModal,
  handleChoiseCategory,
  handleChangeParameter,
  handleNextPage,
}) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schemaAddModalPage1),
  });

  const onSubmit = data => {
    if (data) {
      handleNextPage();
    }
  };

  const onError = e => {
    const arr = ['title', 'name', 'date', 'breed'];
    arr.map(item => notify(e[item]?.message));
  };

  return (
    <Modal id="mainPageModal">
      <IconClose onClick={handleBtnCLoseModal} />
      <ModalTitle>Add pet</ModalTitle>
      <ModalTitleInfo>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </ModalTitleInfo>

      <CategoryList>
        <li>
          <CategoryBtn
            id="lostFound"
            onClick={handleChoiseCategory}
            type="button"
          >
            lost/found
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn
            id="inGoodHands"
            onClick={handleChoiseCategory}
            type="button"
          >
            in good hands
          </CategoryBtn>
        </li>
        <li>
          <CategoryBtn id="sell" onClick={handleChoiseCategory} type="button">
            sell
          </CategoryBtn>
        </li>
      </CategoryList>
      <ParameterList>
        <li>
          <ParameterTitle>
            Tittle of ad<span>*</span>
          </ParameterTitle>
          <ParameterInput
            {...register('title')}
            id="titleInput"
            onChange={handleChangeParameter}
            type="text"
            placeholder="Type title"
          />
        </li>
        <li>
          <ParameterTitle>
            Name pet<span>*</span>
          </ParameterTitle>
          <ParameterInput
            {...register('name')}
            id="nameInput"
            onChange={handleChangeParameter}
            type="text"
            placeholder="Type name pet"
          />
        </li>
        <li>
          <ParameterTitle>
            Date of birth<span>*</span>
          </ParameterTitle>
          <ParameterInput
            {...register('date')}
            id="birthInput"
            onChange={handleChangeParameter}
            type="text"
            placeholder="Type date of birth"
          />
        </li>
        <li>
          <ParameterTitle>
            Breed<span>*</span>
          </ParameterTitle>
          <ParameterInput
            {...register('breed')}
            id="breedInput"
            onChange={handleChangeParameter}
            type="text"
            placeholder="Type breed"
          />
        </li>
      </ParameterList>
      <ControlsBtnList>
        <li>
          <ControlsBtn onClick={handleBtnCLoseModal}>Cancel</ControlsBtn>
        </li>
        <li>
          <ControlsBtn onClick={handleSubmit(onSubmit, onError)}>
            Next
          </ControlsBtn>
        </li>
      </ControlsBtnList>
    </Modal>
  );
};
