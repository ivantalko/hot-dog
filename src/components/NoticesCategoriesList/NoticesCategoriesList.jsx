import { FakeNoticesCardData } from 'data/FakeNoticesCardData';
import { useState } from 'react';
import {
  Section,
  NoticesList,
  NoticesItem,
  FavoriteBtn,
  HeartIconPrimal,
  PetCategory,
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
    const filteredForPet = filterFoCategory.filter(
      item => item.pet === `${searchQuery}`
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
              <img loading="lazy" src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.breed}</p>
              <p>{item.place}</p>
              <p>{item.age}</p>
              <button>Learn more</button>
              <button>Delete</button>
            </NoticesItem>
          );
        })}
      </NoticesList>
    </Section>
  );
};
