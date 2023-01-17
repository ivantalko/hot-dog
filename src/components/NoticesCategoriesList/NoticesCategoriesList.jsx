import { FakeNoticesCardData } from 'data/FakeNoticesCardData';
import { useEffect } from 'react';
import { useState } from 'react';
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
} from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router-dom';
import { ModalNotice } from '../ModalNotice/ModalNotice.jsx';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.slice(9);
  const [favotire, setFavorite] = useState(false);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);

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
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setMoreInfoVisible(false);
    }
  };

  return (
    <Section>
      <NoticesList>
        {filteredPets().map(item => {
          return (
            <NoticesItem key={item.id}>
              <PetCategory>{item.category}</PetCategory>
              <FavoriteBtn onClick={handleClickToFavorite}>
                {favotire ? (
                  <HeartIconPrimal id="toFavoriteInList" active="true" />
                ) : (
                  <HeartIconPrimal id="toFavoriteInList" active="false" />
                )}
              </FavoriteBtn>
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
                  <LearnMoreBtn onClick={handleMoreInfoVisible}>
                    Learn more
                  </LearnMoreBtn>
                </li>
                <li>
                  <DeleteBtn>Delete</DeleteBtn>
                </li>
              </ButtonsList>
            </NoticesItem>
          );
        })}
      </NoticesList>
      {moreInfoVisible && (
        <ModalNotice handleBackdropClose={handleBackdropClose} />
      )}
    </Section>
  );
};
