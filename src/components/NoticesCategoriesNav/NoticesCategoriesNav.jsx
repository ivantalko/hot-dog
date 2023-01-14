import { NoticesPageData } from 'data/NoticesPageData';
import { NavList, NavLinkStyled, NavItem } from './NoticesCategoriesNav.styles';

export const NoticesCategoriesNav = () => {
  return (
    <nav>
      <NavList>
        {NoticesPageData.map(({ id, to, text }) => {
          return (
            <NavItem key={id}>
              {/* <NavLinkStyled end to={`${to}/${name}`}> */}
              <NavLinkStyled to={to}>{text}</NavLinkStyled>
            </NavItem>
          );
        })}
      </NavList>
    </nav>
  );
};
