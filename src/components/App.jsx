import UserPage from 'pages/UserPage/UserPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import OurFriends from '../pages/OurFriends/OurFriends';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { NoticiesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { useState, useRef } from 'react';
import { Home } from './Home/Home';
import { NewsPage } from 'pages/NewsPage/NewsPage';
import { Notices } from 'pages/NoticesPage/NoticesPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { currentUser } from '../redux/Auth/auth-operations';
// import { getToken } from '../redux/Auth/auth-selectors';
// import { getUserOperation } from 'redux/User/user-operation';
import { currentUserOperation } from 'redux/Auth/auth-operations';
export const App = () => {
  const isFirstRender = useRef(true);
  // const authToken = useSelector(getToken);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(currentUser());
  //   dispatch(getUserOperation());
  // }, [authToken, dispatch]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(currentUserOperation());
  }, [dispatch]);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<NewsPage />} />
        <Route
          path="notices"
          element={
            <Notices
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        >
          <Route
            path="sell"
            element={<NoticiesCategoriesList searchQuery={searchQuery} />}
          />
          <Route
            path="lost-found"
            element={<NoticiesCategoriesList searchQuery={searchQuery} />}
          />
          <Route
            path="for-free"
            element={<NoticiesCategoriesList searchQuery={searchQuery} />}
          />
          <Route
            path="favorite"
            element={<NoticiesCategoriesList searchQuery={searchQuery} />}
          />
          <Route
            path="own"
            element={<NoticiesCategoriesList searchQuery={searchQuery} />}
          />
        </Route>

        <Route path="friends" element={<OurFriends />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="user" element={<UserPage />} />
      </Route>
    </Routes>
  );
};
