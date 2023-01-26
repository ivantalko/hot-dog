import { ContainerStyleduser } from '../../components/Container-user/Container-user.styled';
import PropTypes from 'prop-types';

export const ContainerUser = ({ children }) => (
  <ContainerStyleduser>{children}</ContainerStyleduser>
);

ContainerUser.propTypes = {
  children: PropTypes.node,
};
