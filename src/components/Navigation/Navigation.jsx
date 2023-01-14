import React from 'react';
import Nav from 'components/Nav/Nav';
import UserNav from 'components/UserNav/UserNav';
import AuthNav from 'components/AuthNav/AuthNav';
// import { useSelector } from 'react-redux';

export default function Navigation() {
  // const token = useSelector();

  return (
    <div>
      <Nav />
      <UserNav />
      <AuthNav />
      {/* {token ? <UserNav /> : <AuthNav />} */}
    </div>
  );
}
