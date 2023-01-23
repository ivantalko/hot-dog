import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import { getNoticesData } from 'redux/Notice/notice-operations';
import { selectorNoticesData } from 'redux/Notice/notice-selector';
import { useDispatch } from 'react-redux';
import { getNoticesById } from 'redux/Notice/notice-operations';
import { selectorNoticeById } from 'redux/Notice/notice-selector';
import { getMyNotices } from 'redux/Notice/notice-operations';
import { getToken } from 'redux/Auth/auth-selectors';
import { selectorMyNotices } from 'redux/Notice/notice-selector';
import { ConfirmModal } from './ConfirmModal/ConfirmModal';
import {
  Section,
  NoticesList,
  NoticesItem,
  FavoriteBtn,
  HeartIconPrimal,
  PetCategory,
  NoticesItemImg,
  ItemTitle,
  ParametersList,
  ParametersItemText,
  ParametersName,
  ButtonsList,
  LearnMoreBtn,
  DeleteBtn,
  DeleteIcon,
} from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router-dom';
import { ModalNotice } from '../ModalNotice/ModalNotice.jsx';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const noticeById = useSelector(selectorNoticeById);
  const isLogin = useSelector(getIsLogin);
  const location = useLocation();
  const [favotire, setFavorite] = useState(false);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const token = useSelector(getToken);
  let notices = useSelector(selectorNoticesData);
  const myNotices = useSelector(selectorMyNotices);
  const [openConfirmModal, setOpenConfirmModal] = useState();

  let category = '';
  if (location.pathname === '/notices/lost-found') {
    category = 'lostFound';
  } else if (location.pathname === '/notices/for-free') {
    category = 'inGoodHands';
  } else if (location.pathname === '/notices/sell') {
    category = 'sell';
  } else if (location.pathname === '/notices/own') {
    category = 'own';
  } else if (location.pathname === '/notices/favorite') {
    category = 'favorite';
  }

  const noticesArr = () => {
    if (
      category === 'lostFound' ||
      category === 'inGoodHands' ||
      category === 'sell'
    ) {
      return notices;
    }
    if (category === 'own') {
      return myNotices;
    }
    if (category === 'favorite') {
      return myNotices;
    }
  };

  useEffect(() => {
    if (
      category === 'lostFound' ||
      category === 'inGoodHands' ||
      category === 'sell'
    ) {
      dispatch(getNoticesData(category));
    }
    if (category === 'own') {
      dispatch(getMyNotices(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleClickToFavorite = () => {
    setFavorite(!favotire);
  };

  const handleOpenConfirmModal = () => {
    // const body = document.querySelector('body');
    setOpenConfirmModal(!openConfirmModal);
    // body.classList.add('modal');
  };

  const handleMoreInfoVisible = e => {
    dispatch(getNoticesById(e));
    setMoreInfoVisible(true);
    document.querySelector('body').classList.add('modal');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setMoreInfoVisible(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setMoreInfoVisible(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const filteredPets = () => {
    const filteredForPet = noticesArr().filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery === '') {
      return noticesArr();
    }
    return filteredForPet;
  };

  const age = birthday => {
    const date = new Date();
    const dateYear = date.getFullYear();
    const age = dateYear - birthday;
    return age;
  };

  return (
    <Section>
      <ConfirmModal handleOpenConfirmModal={handleOpenConfirmModal} />

      <NoticesList>
        {filteredPets().map(item => {
          let birthday = '';
          let dateNow = new Date();
          if (item.birthday.length < 11) {
            birthday = item.birthday.slice(6);
          } else if (item.birthday.length > 11) {
            birthday = dateNow.getFullYear();
          }
          return (
            <NoticesItem id={item.id} key={item._id}>
              <PetCategory>{item.category}</PetCategory>
              {isLogin && (
                <FavoriteBtn onClick={handleClickToFavorite}>
                  {favotire ? (
                    <HeartIconPrimal id="toFavoriteInList" active="true" />
                  ) : (
                    <HeartIconPrimal id="toFavoriteInList" active="false" />
                  )}
                </FavoriteBtn>
              )}
              <NoticesItemImg
                height="288px"
                loading="lazy"
                src={item.avatarURL}
                alt={item.Noki}
              />
              <ItemTitle>{item.title}</ItemTitle>

              <ParametersList>
                <li>
                  <ParametersItemText>
                    <ParametersName>Breed: </ParametersName>
                    {item.breed || 'dry food'}
                  </ParametersItemText>
                </li>
                <li>
                  <ParametersItemText>
                    <ParametersName>Place:</ParametersName>
                    {item.location}
                  </ParametersItemText>
                </li>
                <li>
                  <ParametersItemText>
                    <ParametersName>Age:</ParametersName>
                    {age(birthday)}
                  </ParametersItemText>
                </li>
              </ParametersList>

              <ButtonsList>
                <li>
                  <LearnMoreBtn
                    id={item._id}
                    onClick={() => {
                      handleMoreInfoVisible(item._id);
                    }}
                  >
                    Learn more
                  </LearnMoreBtn>
                </li>
                {isLogin && (
                  <li>
                    <DeleteBtn
                      id={item._id}
                      onClick={() => {
                        handleOpenConfirmModal();
                      }}
                    >
                      Delete <DeleteIcon />
                    </DeleteBtn>
                  </li>
                )}
              </ButtonsList>
            </NoticesItem>
          );
        })}
      </NoticesList>
      {moreInfoVisible && (
        <ModalNotice
          notices={notices}
          setMoreInfoVisible={setMoreInfoVisible}
          handleBackdropClose={handleBackdropClose}
          noticeById={noticeById}
        />
      )}
    </Section>
  );
};
