import { StyledFrameImage, StyledTitle } from './style/StyledHome';

import { Container } from 'components/Container/Container';

export const Home = () => {
  return (
    <>
      <Container>
        <StyledTitle>Take good care of your small pets</StyledTitle>
      </Container>
      <StyledFrameImage />
    </>
  );
};
