import { Link } from 'react-router-dom';
import { breakpoints } from 'helpers/breakpoints';
import styled from 'styled-components';

function Loader() {
  return (
    <Paw
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12-17.23-10.71-33.5-20.83-44.14-39-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 00-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464 448 430.85 448 390.11a78.3 78.3 0 00-5.2-28.29z" />
      <ellipse cx="72" cy="216" rx="56" ry="72" />
      <ellipse cx="184" cy="120" rx="56" ry="72" />
      <ellipse cx="328" cy="120" rx="56" ry="72" />
      <ellipse cx="440" cy="216" rx="56" ry="72" />
    </Paw>
  );
}
const Paw = styled.svg`
  text-align: center;
  margin: 30px auto;

  width: 80px;
  height: 80px;
  fill: #f59256;

  @media ${breakpoints.minTablet} {
    width: 150px;
    height: 150px;
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    color: #f59256;
  }
`;

const Section = styled.section`
  padding: 60px 20px 0px 20px;
  @media ${breakpoints.minTablet} {
    padding: 60px 32px 0px 32px;
  }
  @media ${breakpoints.desktop} {
    padding: 60px 16px 0px 16px;
  }
  max-width: 1280px px;
  margin: auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NotFoundPge = () => {
  return (
    <Section style={{ paddingTop: 60 }}>
      <h2>Sorry, but such a page does not exist</h2>
      <Loader />
      <LinkStyled to="/">Return to home?</LinkStyled>
    </Section>
  );
};

export default NotFoundPge;
