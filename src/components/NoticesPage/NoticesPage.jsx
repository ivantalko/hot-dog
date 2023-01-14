import { useState } from 'react';
import { Outlet, NavLink, useSearchParams } from 'react-router-dom';

export const Notices = () => {
  const [params, setParams] = useSearchParams();
  const namePar = params.get('query');
  const [name, setName] = useState(namePar ?? '');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchButton = e => {
    setParams({ query: name });
    e.preventDefault();
    if (namePar !== '') {
      setParams({ query: '' });
      setName('');
    }
  };

  const handleInputChange = e => {
    setName(e.target.value);
    e.preventDefault();
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

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

          <button type="submit" onClick={handleSearchButton}>
            {namePar ? <>X</> : <>0</>}
          </button>
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
          <button onClick={handleModalOpen} type="button">
            +
          </button>
        </div>
      </div>
      <Outlet />
      {isModalOpen && <div style={{ backgroundColor: 'red' }}>MODAL FORM</div>}
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
