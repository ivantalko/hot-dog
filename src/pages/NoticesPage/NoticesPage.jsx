/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesAddModal } from 'components/NoticesAddModal/NoticesAddModal';
import { useSelector } from 'react-redux';
import { selectorNoticesData } from 'redux/Notice/notice-selector';
import { useDispatch } from 'react-redux';
import { getNoticesData } from 'redux/Notice/notice-operations';

import {
  Section,
  NavBox,
  SectionTitle,
  SearchIcon,
  CloseIcon,
  AddIcon,
  SearchInput,
  SearchForm,
  SearchButton,
  AddBtnBox,
  AddBtnText,
  AddBtn,
} from './NoticesPage.styled';

export const Notices = ({ searchQuery, setSearchQuery }) => {
  const location = useLocation();
  const [params, setParams] = useSearchParams();
  const query = params.get('query');
  const [name, setName] = useState(query ?? searchQuery);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoticesData());
  }, []);

  const contacts = useSelector(selectorNoticesData);

  console.log(contacts);

  const [pet, setPet] = useState({
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: '',
    location: '',
    price: '',
    category: '',
    comments: '',
  });

  // const getMovies = async () => {
  //   const moviesApi = await getSearchMoviesApi(name);
  //   setMoviesArr(moviesApi.results);
  // };

  // console.log(getSearchMoviesApi);

  const handleSearchButton = e => {
    setParams({ query: name });
    setSearchQuery(name);
    e.preventDefault();
  };

  useEffect(() => {
    if (query !== null) {
      setSearchQuery(query);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setParams({ query: name });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchClear = e => {
    e.preventDefault();
    setParams({ query: '' });
    setName('');
  };

  const handleInputChange = e => {
    setName(e.target.value);
    e.preventDefault();
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
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
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  return (
    <Section>
      <NavBox>
        <SectionTitle>Find your favorite pet</SectionTitle>
        <SearchForm>
          <SearchInput
            value={name}
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
          />
          {query !== '' || query === null ? (
            <SearchButton type="submit" onClick={handleSearchClear}>
              <CloseIcon />
            </SearchButton>
          ) : (
            <SearchButton type="submit" onClick={handleSearchButton}>
              <SearchIcon />
            </SearchButton>
          )}
        </SearchForm>
        <NoticesCategoriesNav
          category={category}
          setCategory={setCategory}
          location={location}
        />
        <AddBtnBox>
          <AddBtnText>Add pet</AddBtnText>
          <AddBtn onClick={handleModalOpen} type="button">
            <AddIcon />
          </AddBtn>
        </AddBtnBox>
      </NavBox>
      {isModalOpen && (
        <NoticesAddModal
          pet={pet}
          setPet={setPet}
          setIsModalOpen={setIsModalOpen}
          handleBackdropClose={handleBackdropClose}
        />
      )}
    </Section>
  );
};
