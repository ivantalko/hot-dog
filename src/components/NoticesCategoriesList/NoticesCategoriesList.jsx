import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import { getNoticesData } from 'redux/Notice/notice-operations';
import { selectorNoticesData } from 'redux/Notice/notice-selector';
import { useDispatch } from 'react-redux';
import { getNoticesById } from 'redux/Notice/notice-operations';
import { selectorNoticeById } from 'redux/Notice/notice-selector';

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
  const notices = useSelector(selectorNoticesData);
  let category = '';

  useEffect(() => {
    dispatch(getNoticesData(category));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (location.pathname === '/notices/lost-found') {
    category = 'lostFound';
  } else if (location.pathname === '/notices/for-free') {
    category = 'inGoodHands';
  } else if (location.pathname === '/notices/sell') {
    category = 'sell';
  }

  const handleClickToFavorite = () => {
    setFavorite(!favotire);
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
                        console.log(`delete item id=${item._id}`);
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
