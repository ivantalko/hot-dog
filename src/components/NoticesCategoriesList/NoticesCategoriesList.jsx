import { FakeNoticesCardData } from 'data/FakeNoticesCardData';
import {
  Section,
  NoticesList,
  NoticesItem,
} from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router-dom';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.slice(9);
  console.log(currentPath);
  console.log(searchQuery);

  const filterFoCategory = FakeNoticesCardData.filter(
    item => item.category === `${currentPath}`
  );

  console.log(filterFoCategory);
  const filteredForPet = filterFoCategory.filter(
    item => item.pet === `${searchQuery}`
  );

  console.log(filteredForPet);

  return (
    <Section>
      {searchQuery === '' ? (
        <NoticesList>
          {filterFoCategory.map(item => {
            return (
              <NoticesItem key={item.id}>
                {/* <span>{item.category}</span>
              <button>fav</button> */}
                <img src={item.src} alt={item.title} />
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
      ) : (
        <NoticesList>
          {filteredForPet.map(item => {
            return (
              <NoticesItem key={item.id}>
                {/* <span>{item.category}</span>
              <button>fav</button> */}
                <img src={item.src} alt={item.title} />
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
      )}
    </Section>
  );
};
