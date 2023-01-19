import { Container } from 'components/Container/Container';
import { Title } from './NewsPage.styled';
import { NewsSearchForm } from '../../components/News/NewsSearch/NewsSearchForm';
import { NewsList } from 'components/News/NewsList/NewsList';
import { useState, useEffect } from 'react';
import { getAllNews } from 'services/API';

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [closeBtn, setCloseBtn] = useState(false);
  const [value, setValue] = useState('');

  const getNews = () => {
    async function getData() {
      try {
        const data = await getAllNews();
        setNews(data.reverse());
      } catch {
        console.log('error');
      }
    }
    getData();
    // eslint-disable-next-line
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setCloseBtn(!closeBtn);

    setFilteredNews(
      news.filter(item =>
        item.description.toLowerCase().includes(value.toLowerCase())
      )
    );
    setIsFiltered(!isFiltered);
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const removeValue = e => {
    e.preventDefault();
    setValue('');
    setCloseBtn(prev => !prev);
    getNews();
    setIsFiltered(!isFiltered);
  };

  return (
    <Container>
      <Title>News</Title>
      <NewsSearchForm
        value={value}
        handleSubmit={handleSubmit}
        handeInputChange={handleInputChange}
        closeBtn={closeBtn}
        removeValue={removeValue}
      />

      <NewsList
        news={news}
        filteredNews={filteredNews}
        isFiltered={isFiltered}
      />
    </Container>
  );
};
