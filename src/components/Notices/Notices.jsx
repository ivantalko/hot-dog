import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Notices = () => {
  return (
    <section>
      <div>
        Find your favorite pet
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <nav>
          <ul>
            <li>
              <NavLink to="sell">sell</NavLink>
            </li>
            <li>
              <NavLink to="lost-found">lost/found</NavLink>
            </li>
            <li>
              <NavLink to="for-free">in good hands</NavLink>
            </li>
            <li>
              <NavLink to="favorite">favorite ads</NavLink>
            </li>
            <li>
              <NavLink to="own">my ads</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <span>Add pet</span>
          <button type="button">+</button>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

// export const CategoryName = () => {
//   return (
//     <>
//       |CategoryName
//       <></>
//       <Outlet />
//     </>
//   );
// };
