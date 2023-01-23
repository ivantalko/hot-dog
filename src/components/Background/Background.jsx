import { Container } from 'components/Container/Container';
import { BackgroundAuthorize, ContainerBackground } from './Background.styled';
import PropTypes from 'prop-types';

const Background = ({ children }) => {
  return (
    <ContainerBackground>
      <BackgroundAuthorize>{children}</BackgroundAuthorize>
    </ContainerBackground>
  );
};
export default Background;

Container.propTypes = {
  children: PropTypes.node,
};
