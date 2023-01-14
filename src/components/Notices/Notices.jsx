import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
// import { useEffect } from 'react';

export const Notices = () => {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  const handleSearchButton = e => {
    setName(value);
    e.preventDefault();
    if (name !== '') {
      setValue('');
    }
  };

  const handleInputChange = e => {
    setValue(e.target.value);
    e.preventDefault();
  };

  console.log(name);

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

          <button type="submit" onClick={handleSearchButton}>
            {name === '' ? (
              <>
                <Link to={`${value}`}>0_0</Link>
              </>
            ) : (
              <>
                <Link to={`${value}`}>X_X</Link>
              </>
            )}
          </button>
        </form>
        <nav>
          <ul>
            <li>
              <NavLink to={name === '' ? 'sell' : `${name}/sell`}>sell</NavLink>
            </li>
            <li>
              <NavLink to={name === '' ? 'lost-found' : `${name}/lost-found`}>
                lost/found
              </NavLink>
            </li>
            <li>
              <NavLink to={name === '' ? 'for-free' : `${name}/for-free`}>
                in good hands
              </NavLink>
            </li>
            <li>
              <NavLink to={name === '' ? 'favorite' : `${name}/favorite`}>
                favorite ads
              </NavLink>
            </li>
            <li>
              <NavLink to={name === '' ? 'own' : `${name}/own`}>my ads</NavLink>
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
