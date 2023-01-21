import { breakpoints } from 'helpers/breakpoints';

import styled from 'styled-components';
export const BaseButtons = styled.button`
  width: 280px;
  height: 44px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;

  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);

  display: flex;
  justify-content: center;
  letter-spacing: 0.04em;

  color: ${({ disabled }) => (disabled ? '#0c0c0c' : '#ffffff')};
  background: ${({ disabled }) => (disabled ? '#ffffff' : '#f59256')};
  &:hover,
  &:focus {
    background: #ffffff;
    border: 2px solid #f59256;
    color: #000000;
  }
  margin-bottom: 40px;
  padding: 8px 25px;
  cursor: pointer;
  @media ${breakpoints.minTablet} {
    padding: 10px 28px;
    width: 448px;
  }

  @media ${breakpoints.desktop} {
    width: 458px;
    height: 48px;
  }
`;
