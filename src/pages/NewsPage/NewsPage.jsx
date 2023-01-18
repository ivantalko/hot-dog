import { Container } from 'components/Container/Container';
import { Title } from './NewsPage.styled';
import { NewsSearchForm } from '../../components/News/NewsSearch/NewsSearchForm';
import { NewsList } from 'components/News/NewsList/NewsList';
import { useState, useEffect } from 'react';
import { StatusForAll } from '../../redux/status';
import { getAllNews } from 'services/API';

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState(StatusForAll.init);
  // const [page, setPage] = useState(1);
  const [closeBtn, setCloseBtn] = useState(false);
  const [value, setValue] = useState('');

  // const limit = 6;

  // const params = {
  //   _limit: limit,
  //   _page: page,
  // };

  const getNews = () => {
    async function getData() {
      try {
        const data = await getAllNews();
        setNews(data.reverse());
        setStatus(StatusForAll.success);
        // setPage(prev => prev.page + 1);
      } catch {
        setStatus(StatusForAll.error);
      }
    }
    getData();
    // eslint-disable-next-line
  };

  useEffect(() => {
    setStatus(StatusForAll.loading);
    getNews();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setCloseBtn(!closeBtn);

    setNews(
      news.filter(item =>
        item.description.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const removeValue = e => {
    e.preventDefault();
    setValue('');
    setCloseBtn(prev => !prev);
    getNews();
    // eslint-disable-next-line
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
      <NewsList news={news} />
    </Container>
  );
};
