import { FakeNoticesCardData } from 'data/FakeNoticesCardData';

import {
  ModalNoticeBackdrop,
  ModalBox,
  CloseBtn,
  ModalCLoseBtn,
  CatagoryName,
  NoticesInfoImg,
  NoticesInfoTitle,
  ParametersList,
  NoticesInfoParameters,
  ParametersValue,
  CommentsText,
  CommentsTextStrong,
  BtnList,
  ContactBtn,
  AddToBtn,
  TopBoxStyled,
  ParametersBox,
  HeartIcon,
} from './ModalNotice.styled';

export const ModalNotice = ({
  handleBackdropClose,
  itemId,
  setMoreInfoVisible,
}) => {
  const NoticeMoreInfo = FakeNoticesCardData.find(item => item.id === itemId);

  const handleModalCloseBtn = () => {
    setMoreInfoVisible(false);
    document.querySelector('body').classList.remove('modal');
  };

  return (
    <ModalNoticeBackdrop onClick={handleBackdropClose}>
      <ModalBox>
        <ModalCLoseBtn onClick={handleModalCloseBtn}>
          <CloseBtn />
        </ModalCLoseBtn>
        <TopBoxStyled>
          <CatagoryName>{NoticeMoreInfo.category}</CatagoryName>
          <NoticesInfoImg src={NoticeMoreInfo.src} alt={NoticeMoreInfo.pet} />

          <ParametersBox>
            <NoticesInfoTitle>{NoticeMoreInfo.title}</NoticesInfoTitle>
            <ParametersList>
              <li>
                <NoticesInfoParameters>
                  Name:
                  <ParametersValue>{NoticeMoreInfo.name}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Birthday:
                  <ParametersValue>{NoticeMoreInfo.birthday}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Breed:
                  <ParametersValue>{NoticeMoreInfo.breed}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Location:
                  <ParametersValue>{NoticeMoreInfo.location}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  The sex:
                  <ParametersValue>{NoticeMoreInfo.sex}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Email:
                  <ParametersValue>DedMol@gmail.com</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Phone:
                  <ParametersValue>{NoticeMoreInfo.phone}</ParametersValue>
                </NoticesInfoParameters>
              </li>
            </ParametersList>
          </ParametersBox>
        </TopBoxStyled>
        <div>
          <CommentsText>
            <CommentsTextStrong>Comments: </CommentsTextStrong>
            {NoticeMoreInfo.comments}
          </CommentsText>
          <BtnList>
            <li>
              <ContactBtn href={`tel:${NoticeMoreInfo.phone}`}>
                Contact
              </ContactBtn>
            </li>
            <li>
              <AddToBtn>
                Add to <HeartIcon />
              </AddToBtn>
            </li>
          </BtnList>
        </div>
      </ModalBox>
    </ModalNoticeBackdrop>
  );
};
