import { NewsItem } from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';

export const NewsList = ({ news }) => {
  return (
    <List>
      {news?.map(item => (
        <NewsItem
          key={item.title}
          title={item.title}
          date={item.date}
          url={item.url}
          description={item.description}
        />
      ))}
    </List>
  );
};
