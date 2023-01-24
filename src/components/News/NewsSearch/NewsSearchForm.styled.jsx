import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Form = styled.form`
  position: relative;
  min-width: 280px;
  height: 44px;
  margin: 28px auto 0;

  @media ${breakpoints.minTablet} {
    margin: 40px auto 0;
    width: 608px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 9px 50px 10px 12px;
  margin-bottom: 40px;
  border-radius: 20px;
  border: none;
  background-color: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  font-weight: 500;
  font-size: 16px;
  line-height: 0.7;
  letter-spacing: 4%;
  color: #535353;
  transition: box-shadow linear 250ms;

  @media ${breakpoints.minTablet} {
    padding: 10px 50px 10px 20px;
    font-size: 20px;
  }

  ::placeholder {
    color: #535353;
  }
  :focus {
    outline: none;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.292);
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 9px;
  right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  scale: 1;

  transition: all linear 250ms;

  @media ${breakpoints.minTablet} {
    bottom: 7px;
  }

  :hover {
    scale: 0.8;
  }
`;
