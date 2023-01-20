import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import {
  NoticesPageDataPublic,
  NoticesPageDataAuth,
} from 'data/NoticesPageData';
import { NavList, NavLinkStyled, NavItem } from './NoticesCategoriesNav.styles';
import { Outlet } from 'react-router-dom';

export const NoticesCategoriesNav = ({ location }) => {
  const isLogin = useSelector(getIsLogin);
  return (
    <>
      <nav>
        <NavList>
          {NoticesPageDataPublic.map(({ id, to, text }) => {
            return (
              <NavItem key={id}>
                <NavLinkStyled to={`${to}${location.search}`}>
                  {text}
                </NavLinkStyled>
              </NavItem>
            );
          })}
          {isLogin &&
            NoticesPageDataAuth.map(({ id, to, text }) => {
              return (
                <NavItem key={id}>
                  <NavLinkStyled to={`${to}${location.search}`}>
                    {text}
                  </NavLinkStyled>
                </NavItem>
              );
            })}
        </NavList>
      </nav>
      <Outlet location={location} />
    </>
  );
};
