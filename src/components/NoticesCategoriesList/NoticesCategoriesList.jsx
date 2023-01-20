import { FakeNoticesCardData } from 'data/FakeNoticesCardData';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import { getNoticesData } from 'redux/Notice/notice-operations';
import { selectorNoticesData } from 'redux/Notice/notice-selector';
import { useDispatch } from 'react-redux';

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
  const isLogin = useSelector(getIsLogin);
  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.slice(9);
  const [favotire, setFavorite] = useState(false);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [itemId, setItemId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesData());
  }, []);

  const notices = useSelector(selectorNoticesData);

  console.log(notices.items);

  const handleClickToFavorite = () => {
    setFavorite(!favotire);
  };

  const filteredPets = () => {
    const filterFoCategory = FakeNoticesCardData.filter(
      item => item.category === `${currentPath}`
    );
    const filteredForPet = filterFoCategory.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery === '') {
      return filterFoCategory;
    }

    return filteredForPet;
  };

  const handleMoreInfoVisible = () => {
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

  return (
    <Section>
      <NoticesList>
        {filteredPets().map(item => {
          return (
            <NoticesItem id={item.id} key={item.id}>
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
                src={item.src}
                alt={item.title}
              />
              <ItemTitle>{item.title}</ItemTitle>

              <ParametersList>
                <li>
                  <ParametersItemText>
                    <ParametersName>Breed:</ParametersName>
                    {item.breed}
                  </ParametersItemText>
                </li>
                <li>
                  <ParametersItemText>
                    <ParametersName>Place:</ParametersName>
                    {item.place}
                  </ParametersItemText>
                </li>
                <li>
                  <ParametersItemText>
                    <ParametersName>Age:</ParametersName>
                    {item.age}
                  </ParametersItemText>
                </li>
              </ParametersList>

              <ButtonsList>
                <li>
                  <LearnMoreBtn
                    id={item.id}
                    onClick={() => {
                      setItemId(item.id);
                      handleMoreInfoVisible();
                    }}
                  >
                    Learn more
                  </LearnMoreBtn>
                </li>
                {isLogin && (
                  <li>
                    <DeleteBtn
                      id={item.id}
                      onClick={() => {
                        console.log('delete btn');
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
          itemId={itemId}
          setMoreInfoVisible={setMoreInfoVisible}
          handleBackdropClose={handleBackdropClose}
        />
      )}
    </Section>
  );
};
