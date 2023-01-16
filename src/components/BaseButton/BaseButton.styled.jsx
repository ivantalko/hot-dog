import styled from 'styled-components';
export const BaseButtons = styled.button`
  padding: 10px 28px;

  width: 458px;
  height: 48px;

  padding: 10px 28px;
  margin-bottom: 40px;

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
