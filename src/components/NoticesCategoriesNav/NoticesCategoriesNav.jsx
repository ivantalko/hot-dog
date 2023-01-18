import { NoticesPageData } from 'data/NoticesPageData';
import { NavList, NavLinkStyled, NavItem } from './NoticesCategoriesNav.styles';
import { Outlet } from 'react-router-dom';

export const NoticesCategoriesNav = ({ location }) => {
  return (
    <>
      <nav>
        <NavList>
          {NoticesPageData.map(({ id, to, text }) => {
            return (
              <NavItem key={id}>
                {/* <NavLinkStyled end to={`${to}/${name}`}> */}
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
