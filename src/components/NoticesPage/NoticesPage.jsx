import { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import {
  Section,
  SectionTitle,
  SearchIcon,
  CloseIcon,
  SearchInput,
  SearchForm,
  SearchButton,
  NavList,
  NavLinkStyled,
  NavItem,
} from './NoticesPage.styled';

export const Notices = () => {
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');
  const [name, setName] = useState(namePar ?? '');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <Section>
      <div>
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
        <nav>
          <NavList>
            <NavItem>
              <NavLinkStyled to="lost-found">lost/found</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="for-free">in good hands</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="sale">sell</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="favorite">favorite ads</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="own">my ads</NavLinkStyled>
            </NavItem>
          </NavList>
        </nav>
        <div>
          <span>Add pet</span>
          <button onClick={handleModalOpen} type="button">
            +
          </button>
        </div>
      </div>
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

// export const CategoryName = () => {
//   return (
//     <>
//       |CategoryName
//       <></>
//       <Outlet />
//     </>
//   );
// };
