import { FakeNoticesCardData } from 'data/FakeNoticesCardData';
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

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.slice(9);
  const [favotire, setFavorite] = useState(false);

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
              <NoticesItemImg loading="lazy" src={item.src} alt={item.title} />
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
                  <LearnMoreBtn>Learn more</LearnMoreBtn>
                </li>
                <li>
                  <DeleteBtn>Delete</DeleteBtn>
                </li>
              </ButtonsList>
            </NoticesItem>
          );
        })}
      </NoticesList>
    </Section>
  );
};
