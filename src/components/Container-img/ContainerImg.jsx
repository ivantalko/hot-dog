import { ContainerStyledimg } from '../Container-img/ContainerImg.styled';
import PropTypes from 'prop-types';

export const ContainerImg = ({ children }) => (
  <ContainerStyledimg>{children}</ContainerStyledimg>
);

ContainerImg.propTypes = {
  children: PropTypes.node,
};
