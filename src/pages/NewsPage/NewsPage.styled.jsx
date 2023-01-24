import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const Section = styled.section`
  max-width: 1280px;
  margin: auto;
  padding: 44px 20px 100px;
  @media ${breakpoints.minTablet} {
    padding: 90px 32px 100px;
  }
  @media ${breakpoints.desktop} {
    padding: 60px 16px 200px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 0.7;
  color: #111111;
  margin-bottom: 28px;
  text-align: center;

  @media ${breakpoints.minTablet} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export const Error = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-top: 80px;
`;

export const WrapperLoader = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
