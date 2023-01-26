import { Routes, Route } from 'react-router-dom';

import { useState, lazy, Suspense, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import { getUserOperation } from 'redux/User/user-operation';
import { currentUserOperation } from 'redux/Auth/auth-operations';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import PrivateRouter from 'helpers/PrivateRoute/PrivateRoute';
import Loader from './Loader/Loader';
import { LoaderBox } from './Loader/Loader.styled';

const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Layout = lazy(() => import('./Layout/Layout'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));
const OurFriends = lazy(() => import('pages/OurFriends/OurFriends'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const Home = lazy(() => import('../components/Home/Home'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const NoticiesCategoriesList = lazy(() =>
  import('../components/NoticesCategoriesList/NoticesCategoriesList')
);

export const App = () => {
  const isLogged = useSelector(getIsLogin);
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch(currentUserOperation());
    dispatch(getUserOperation());
  }, [dispatch, isLogged]);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Suspense
      fallback={
        <LoaderBox>
          <Loader />
        </LoaderBox>
      }
    >
      <>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFoundPage />} />
            <Route index element={<Home />} />
            <Route path="news" element={<NewsPage />} />
            <Route
              path="notices"
              element={
                <NoticesPage
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
            <Route
              path="user"
              element={
                <PrivateRouter>
                  <UserPage />
                </PrivateRouter>
              }
            />
          </Route>
        </Routes>
      </>
    </Suspense>
  );
};
