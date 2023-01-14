import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as SearchIconPrimal } from './img/searchIcon.svg';
import { ReactComponent as CloseIconPrimal } from './img/closeIcon.svg';

export const Section = styled.section`
  padding: 0px 20px 100px;
  @media ${breakpoints.minTablet} {
    padding: 0px 32px 100px;
  }
  @media ${breakpoints.desktop} {
    padding: 0px 16px 200px;
  }
`;

export const SearchIcon = styled(SearchIconPrimal)`
  height: 20px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;
export const CloseIcon = styled(CloseIconPrimal)`
  height: 20px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #111111;

  margin-bottom: 28px;
  @media ${breakpoints.minTablet} {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }
`;

export const SearchForm = styled.form`
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding-left: 12px;
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  color: black;
`;
