import { useState } from 'react';
import { Outlet, NavLink, useSearchParams } from 'react-router-dom';

export const Notices = () => {
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');
  const [name, setName] = useState(namePar ?? '');
  // const [value, setValue] = useState('');

  const handleSearchButton = e => {
    setParams({ query: name });
    e.preventDefault();
  };

  const handleInputChange = e => {
    setName(e.target.value);
    e.preventDefault();
  };

  console.log(name);
  console.log(namePar);

  return (
    <section>
      <div>
        Find your favorite pet
        <form>
          <input
            value={name}
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
          />
          {namePar ? (
            <button type="submit" onClick={handleSearchButton}>
              X
            </button>
          ) : (
            <button type="submit" onClick={handleSearchButton}>
              0
            </button>
          )}
        </form>
        <nav>
          <ul>
            <li>
              <NavLink to="sale">sell</NavLink>
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
