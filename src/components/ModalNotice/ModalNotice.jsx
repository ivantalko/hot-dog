import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import { selectFavNotices } from 'redux/User/user-selectors';
import { selectorNoticesStatus } from 'redux/Notice/notice-selector';
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
import { LoaderBox } from 'components/NoticesCategoriesList/NoticesCategoriesList.styled';
import Loader from 'components/Loader/Loader';

export const ModalNotice = ({
  handleBackdropClose,
  setMoreInfoVisible,
  handleClickToFavorite,
  noticeById,
}) => {
  const handleModalCloseBtn = () => {
    setMoreInfoVisible(false);
    document.querySelector('body').classList.remove('modal');
  };
  const favNotices = useSelector(selectFavNotices);
  const isLogin = useSelector(getIsLogin);
  const noticesStatus = useSelector(selectorNoticesStatus);

  const favBtnRule = favNotices.find(favId => favId === noticeById._id);

  return (
    <ModalNoticeBackdrop onClick={handleBackdropClose}>
      {noticesStatus !== 'success' && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      <ModalBox>
        <ModalCLoseBtn onClick={handleModalCloseBtn}>
          <CloseBtn />
        </ModalCLoseBtn>
        <TopBoxStyled>
          <CatagoryName>{noticeById.category || ''}</CatagoryName>
          <NoticesInfoImg src={noticeById.avatarURL} alt={noticeById.name} />

          <ParametersBox>
            <NoticesInfoTitle>{noticeById.title || ''}</NoticesInfoTitle>
            <ParametersList>
              <li>
                <NoticesInfoParameters>
                  Name:
                  <ParametersValue>{noticeById.name || ''}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Birthday:
                  <ParametersValue>{noticeById.birthday || ''}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Breed:
                  <ParametersValue>{noticeById.breed}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Location:
                  <ParametersValue>{noticeById.location}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  The sex:
                  <ParametersValue>{noticeById.sex}</ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Email:
                  <ParametersValue>
                    {noticeById.owner ? noticeById.owner.email : ''}
                  </ParametersValue>
                </NoticesInfoParameters>
              </li>
              <li>
                <NoticesInfoParameters>
                  Phone:
                  <ParametersValue>
                    {noticeById.owner ? noticeById.owner.phone : ''}
                  </ParametersValue>
                </NoticesInfoParameters>
              </li>
            </ParametersList>
          </ParametersBox>
        </TopBoxStyled>
        <div>
          <CommentsText>
            <CommentsTextStrong>Comments: </CommentsTextStrong>
            {noticeById.comments}
          </CommentsText>
          <BtnList>
            <li>
              <ContactBtn
                href={noticeById.owner && `tel:${noticeById.owner.phone}`}
              >
                Contact
              </ContactBtn>
            </li>
            <li>
              <AddToBtn
                onClick={handleClickToFavorite}
                favBtnRule={isLogin && favBtnRule}
                data-id={isLogin ? noticeById._id : null}
                data-favorite={favBtnRule ? 0 : 1}
              >
                {favBtnRule && isLogin ? 'Unfollow' : 'Add to'}
                <HeartIcon />
              </AddToBtn>
            </li>
          </BtnList>
        </div>
      </ModalBox>
    </ModalNoticeBackdrop>
  );
};
