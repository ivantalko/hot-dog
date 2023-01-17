import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const NewsTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 33px;
  text-align: left;
  vertical-align: top;
  letter-spacing: -1%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const NewsText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media ${breakpoints.minTablet} {
    margin-bottom: 40px;
    -webkit-line-clamp: 6;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NewsCard = styled.li`
  margin-bottom: 40px;
  width: 280px;

  @media ${breakpoints.minTablet} {
    width: 335px;
  }

  @media ${breakpoints.desktop} {
    width: 392px;
  }
`;

export const OverLine = styled.div`
  width: 80%;
  height: 4px;
  margin-bottom: 4px;
  border-radius: 40px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  @media ${breakpoints.minTablet} {
    width: 280px;
    height: 8px;
    margin-left: 0px;
    margin-right: 0px;
  }
  @media ${breakpoints.desktop} {
    width: 340px;
  }
`;

export const ReadMoreLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  text-decoration-line: none;
  color: #f59256;
  text-decoration-line: underline;
  :hover,
  :focus {
    color: #ff634e;
    cursor: pointer;
  }
`;

export const Time = styled.p`
  color: rgba(17, 17, 17, 0.6);
`;
