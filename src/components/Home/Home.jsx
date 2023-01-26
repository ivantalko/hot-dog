import { StyledFrameImage, StyledTitle } from './style/StyledHome';

import { Container } from 'components/Container/Container';
import { ContainerImg } from '../Container-img/ContainerImg';

const Home = () => {
  return (
    <>
      <Container>
        <StyledTitle>Take good care of your small pets</StyledTitle>
      </Container>
      <ContainerImg>
        <StyledFrameImage />
      </ContainerImg>
    </>
  );
};

export default Home;
