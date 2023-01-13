import { Outlet } from 'react-router-dom';

export const Notices = () => {
  return (
    <div>
      notices page
      <Outlet />
    </div>
  );
};

export const CategoryName = () => {
  return (
    <>
      |CategoryName
      <></>
      <Outlet />
    </>
  );
};
