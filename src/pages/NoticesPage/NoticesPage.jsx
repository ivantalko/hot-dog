import { useState, useEffect } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
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

export const Notices = () => {
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');
  const [name, setName] = useState(namePar ?? '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const handleSearchButton = e => {
    setParams({ query: name });
    e.preventDefault();
    if (namePar !== '') {
      setParams({ query: '' });
      setName('');
    }
  };

  const handleInputChange = e => {
    setName(e.target.value);
    e.preventDefault();
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
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
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      console.log('hi');
      setIsModalOpen(false);
    }
  };

  console.log(location);

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

          <SearchButton type="submit" onClick={handleSearchButton}>
            {namePar ? <CloseIcon /> : <SearchIcon />}
          </SearchButton>
        </SearchForm>
        <NoticesCategoriesNav location={location} />
        <AddBtnBox>
          <AddBtnText>Add pet</AddBtnText>
          <AddBtn onClick={handleModalOpen} type="button">
            <AddIcon />
          </AddBtn>
        </AddBtnBox>
      </NavBox>
      <Outlet />
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
          }}
          onClick={handleBackdropClose}
        >
          <div style={{ backgroundColor: 'red' }}>MODAL FORM</div>
        </div>
      )}
    </Section>
  );
};
