import { NewsItem } from '../NewsItem/NewsItem';
import { ErrorSearch, List } from './NewsList.styled';

export const NewsList = ({ news, isFiltered, filteredNews }) => {
  // const normDate = date => {
  //   return Date.parse(date);
  // };

  // const sortedNews = news.sort((a, b) => normDate(b.date) - normDate(a.date));

  return (
    <>
      {!isFiltered || filteredNews.length > 0 ? (
        <List>
          {!isFiltered
            ? news
                .slice(0, 6)
                .map(item => (
                  <NewsItem
                    key={item.title}
                    title={item.title}
                    date={item.date}
                    url={item.url}
                    description={item.description}
                  />
                ))
            : filteredNews.map(item => (
                <NewsItem
                  key={item.title}
                  title={item.title}
                  date={item.date}
                  url={item.url}
                  description={item.description}
                />
              ))}
        </List>
      ) : (
        <ErrorSearch>Sorry! Try again!</ErrorSearch>
      )}
    </>
  );
};
