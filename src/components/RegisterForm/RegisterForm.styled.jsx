import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterContainer = styled.div`
  position: relative;
  width: 618px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;

  padding: 60px 80px;
`;
export const TitleRegisterForm = styled.title`
  margin-bottom: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;

  font-size: 36px;
  line-height: 1.36;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;

  color: #111111;
`;
export const InputRegisterForm = styled.input`
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
    background: #fdf7f2;
  }
`;

export const RegisterForma = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 16px;
`;
export const InputRegisterFormConfirm = styled.input`
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
  margin-bottom: 40px;
`;

export const TextRegisterForm = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
`;
export const LinkRegisterForm = styled(NavLink)`
  color: #3091eb;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ff6101;
    transform: scale(1.1);
  }
`;
export const RegisterButton = styled.button`
  padding: 10px 28px;

  width: 458px;
  height: 48px;

  padding: 10px 28px;

  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
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
  cursor: pointer;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

export const ValidationContainerPassword = styled.div`
  padding: 10px;
  position: absolute;
  transform: translate(100px, -130px);
  background-color: #ffffffff;

  border: 1px solid red;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 1.33;
`;
export const ValidationContainerEmail = styled.div`
  background-color: #ffffffff;
  padding: 10px;
  position: absolute;
  transform: translate(140px, -198px);
  border: 1px solid red;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 1.33;
`;
export const ValidationContainerPhone = styled.div`
  background-color: #ffffffff;
  padding: 10px;
  position: absolute;
  transform: translate(89px, -75px);
  border: 1px solid red;
  border-radius: 40px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 1.33;
`;
export const RegisterLocationContainer = styled.ul`
  position: absolute;
  transform: translate(8px, -40px);

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2px;

  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid rgba(245, 146, 86, 0.5);

  width: 444px;
  height: 69px;
  overflow: scroll;
`;
export const RegisterButtonLocation = styled.button`
  border: none;
  padding: 5px;

  cursor: pointer;
  background-color: #ffffff;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  width: 100%;
  &:hover,
  &:focus {
    background-color: #fdf7f2;
    color: #f59256;
  }
`;
// export const LoginForma = styled.form`
//   input:nth-last-child(even) {
//     margin-bottom: 40px;
//   }

// `;
