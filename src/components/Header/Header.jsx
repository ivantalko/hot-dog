import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      Logo
      <NavLink to="news">___News___</NavLink>
      <NavLink to="notices">___Find Pet___</NavLink>
      <NavLink to="friends">___Our friend___</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="register">___Registration___</NavLink>
    </>
  );
};
