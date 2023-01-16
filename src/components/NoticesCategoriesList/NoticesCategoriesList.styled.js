import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';
import { ReactComponent as heartPrimal } from './img/heartPrimal.svg';
// import

export const Section = styled.section`
  margin-top: 30px;
  @media ${breakpoints.minTablet} {
    margin-top: 57px;
  }
  @media ${breakpoints.minTablet} {
    margin-top: 60px;
  }
`;

export const NoticesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 4fr);
  gap: 32px;
  @media ${breakpoints.minTablet} {
    grid-template-columns: repeat(2, 4fr);
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 4fr);
  }
`;

export const NoticesItem = styled.li`
  position: relative;
  margin: auto;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  padding-bottom: 12px;
`;

export const NoticesItemImg = styled.img`
  margin-bottom: 20px;
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
  padding 0px 20px;
  margin-bottom: 20px;
`;

export const ParametersList = styled.ul`
  list-style: none;
  padding: 0px 20px;
  display: grid;
  gap: 8px;
  margin-bottom: 20px;
`;

export const ParametersItemText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #111111;
`;

export const ParametersName = styled.span`
  width: 50px;
  margin-right: 40px;
  display: flex;
`;

export const PetCategory = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  padding 6px 53px 6px 20px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  margin-top: 20px;
`;

export const FavoriteBtn = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  position: absolute;
  border: none;
  background-color: transparent;
  color: transparent;
  fill: transparent;
  transition: 250ms;
  width: 44px;
  height: 44px;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  color: white;
  fill: white;

  &:hover,
  &:focus {
    color: #f59256;
    fill: #f59256;
  }
`;

export const HeartIconPrimal = styled(heartPrimal)`
  height: 28px;
  width: 28px;
  color: inherit;
  fill: inherit;
  * {
    color: inherit;
    fill: inherit;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  margin: auto;
  width: 248px;
  height: 38px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-bottom: 20px;
`;
export const DeleteBtn = styled.button`
  display: flex;
  margin: auto;
  width: 248px;
  height: 38px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;
  margin-top: -8px;
`;
