import { FakeNoticesCardData } from 'data/FakeNoticesCardData';
import {
  Section,
  NoticesList,
  NoticesItem,
} from './NoticesCategoriesList.styled';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  console.log(searchQuery);

  return (
    <Section>
      <NoticesList>
        {FakeNoticesCardData.map(item => {
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
    </Section>
  );
};
