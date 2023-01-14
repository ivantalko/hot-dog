import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';

export const Notices = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  const handleSearchButton = e => {
    setName(value);
    e.preventDefault();
  };

  const handleInputChange = e => {
    setValue(e.target.value);
    e.preventDefault();
  };

  return (
    <section>
      <div>
        Find your favorite pet
        <form>
          <input
            value={value}
            onChange={handleInputChange}
            type="text"
            placeholder="Search"
          />

          <button type="submit" onClick={handleSearchButton}></button>
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
