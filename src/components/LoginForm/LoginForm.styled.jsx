import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const FormList = styled.div`
  width: 618px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  padding: 60px 80px;
`;
export const TitleLoginForm = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;

  font-size: 36px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: #111111;
`;
export const InputLoginForm = styled.input`
  width: 458px;
  height: 52px;
  padding-left: 32px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  color: rgba(17, 17, 17, 0.6);

  &:hover,
  &:focus {
    color: #ff6101;
    outline: 1px solid #ff6101;
  }
`;
export const LoginForma = styled.form`
  input:nth-last-child(even) {
    margin-bottom: 40px;
  }
  input:first-child {
    margin-bottom: 16px;
  }
`;

export const TextLoginForm = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  justify-content: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
`;
export const LinkLoginForm = styled(NavLink)`
  color: #3091eb;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff6101;
    transform: scale(1.1);
  }
`;
// export const ContainerLoginForm = styled.div`
//   display: flex;
//   justify-content: center;
//   vertical-align: center;
// `;

// export const ButtonLoginForm = styled.button`
//   padding: 10px 28px;

//   width: 458px;
//   height: 48px;

//   padding: 10px 28px;
//   margin-bottom: 40px;

//   background: #f59256;
//   border-radius: 40px;
//   border: 1px solid rgba(245, 146, 86, 0.5);

//   font-family: 'Manrope';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 20px;
//   line-height: 1.35;
//   display: flex;
//   justify-content: center;
//   letter-spacing: 0.04em;

//   color: #ffffff;
// `;
