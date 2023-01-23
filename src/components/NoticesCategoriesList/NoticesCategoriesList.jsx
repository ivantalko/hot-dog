import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

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

import { ModalNotice } from '../ModalNotice/ModalNotice.jsx';

import {
  getNoticesData,
  getMyNotices,
  getNoticesById,
  getFavNotices,
  deleteNoticesById,
} from 'redux/Notice/notice-operations';
import {
  selectorNoticeById,
  selectorNoticesData,
} from 'redux/Notice/notice-selector';

import { getIsLogin, getToken } from 'redux/Auth/auth-selectors';

import { selectFavNotices, selectOwnNotices } from 'redux/User/user-selectors';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const dispatch = useDispatch();

  const noticeById = useSelector(selectorNoticeById);
  const token = useSelector(getToken);
  let notices = useSelector(selectorNoticesData);
  const isLogin = useSelector(getIsLogin);
  const ownNotices = useSelector(selectOwnNotices);
  const favNotices = useSelector(selectFavNotices);

  const location = useLocation();
  const [favotire, setFavorite] = useState(false);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);

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
    if (category === 'favorite') {
      dispatch(getFavNotices(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const handleClickToFavorite = () => {
    setFavorite(!favotire);
  };

  const handleNoticeDelete = e => {
    dispatch(deleteNoticesById(e.target.dataset.id));
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
    const filteredForPet = notices.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery === '') {
      return notices;
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
      <NoticesList>
        {filteredPets().map(item => {
          const deleteBtnRule =
            ownNotices.find(ownId => ownId === item._id) && isLogin;
          const favBtnRule = favNotices.find(favId => favId === item._id);
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
                  {favBtnRule ? (
                    <HeartIconPrimal
                      {...favBtnRule}
                      id="toFavoriteInList"
                      active="true"
                    />
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
                    onClick={() => {
                      handleMoreInfoVisible(item._id);
                    }}
                  >
                    Learn more
                  </LearnMoreBtn>
                </li>
                {deleteBtnRule && (
                  <li>
                    <DeleteBtn data-id={item._id} onClick={handleNoticeDelete}>
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
