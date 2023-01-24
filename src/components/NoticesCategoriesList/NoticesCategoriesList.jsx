// ConfirmBackdrop,
// ConfirmModal,
// ConfirmText,
// PetName,
// ConfirmBtnList,
// ConfirmBtn,

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

import { toogleFavNotice } from 'redux/User/user-operation';

import {
  selectorNoticeById,
  selectorNoticesData,
} from 'redux/Notice/notice-selector';

import { getIsLogin, getToken } from 'redux/Auth/auth-selectors';

import { selectFavNotices, selectOwnNotices } from 'redux/User/user-selectors';
import { ConfirmModalComponent } from './ConfirmModal/ConfirmModalComponent';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const noticeById = useSelector(selectorNoticeById);
  const isLogin = useSelector(getIsLogin);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const token = useSelector(getToken);
  const notices = useSelector(selectorNoticesData);
  const [openConfirmModalId, setOpenConfirmModalId] = useState(null);
  const ownNotices = useSelector(selectOwnNotices);
  const favNotices = useSelector(selectFavNotices);

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

  const handleClickToFavorite = async e => {
    const target = e.currentTarget;
    target.disabled = true;
    const { payload } = await dispatch(toogleFavNotice(target.dataset));

    if (payload.message === 'Add to fav') target.dataset.favorite = 0;
    if (payload.message === 'Deletete from fav') target.dataset.favorite = 1;

    target.disabled = false;

    target.blur();
  };

  const handleOpenConfirmModal = e => {
    document.querySelector('body').classList.add('modal');
    setOpenConfirmModalId(e.target.dataset.id);
  };

  const handleCloseConfirmModal = e => {
    document.querySelector('body').classList.remove('modal');
    setOpenConfirmModalId(null);
  };

  const handleNoticeDelete = id => {
    dispatch(deleteNoticesById(id));
  };

  const handleMoreInfoVisible = async e => {
    await dispatch(getNoticesById(e));
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
      setOpenConfirmModalId(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setMoreInfoVisible(false);
      setOpenConfirmModalId(false);
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
                <FavoriteBtn
                  onClick={handleClickToFavorite}
                  favBtnRule={favBtnRule}
                  data-id={item._id}
                  data-favorite={favBtnRule ? 0 : 1}
                >
                  <HeartIconPrimal />
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

                {deleteBtnRule && (
                  <li>
                    <DeleteBtn
                      data-id={item._id}
                      onClick={handleOpenConfirmModal}
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
          {...{
            handleClickToFavorite,
            setMoreInfoVisible,
            handleBackdropClose,
            noticeById,
          }}
        />
      )}
      {openConfirmModalId && (
        <ConfirmModalComponent
          {...{
            handleNoticeDelete,
            handleCloseConfirmModal,
            openConfirmModalId,
            handleBackdropClose,
          }}
        />
      )}
    </Section>
  );
};
