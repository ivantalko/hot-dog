import { Routes, Route } from 'react-router-dom';
import { useState, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../redux/Auth/auth-operations';
import { getToken } from '../redux/Auth/auth-selectors';
import { getUserOperation } from 'redux/User/user-operation';
import PrivateRouter from 'helpers/PrivateRoute/PrivateRoute';
import Loader from './Loader/Loader';
import { LoaderBox } from './Loader/Loader.styled';

// import Layout from './Layout/Layout';
// import NewsPage from 'pages/NewsPage/NewsPage';
// import UserPage from 'pages/UserPage/UserPage';

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
  const authToken = useSelector(getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authToken) {
      dispatch(currentUser());
      dispatch(getUserOperation());
    }
  }, [authToken, dispatch]);
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Suspense
      fallback={
        <LoaderBox>
          <Loader />
        </LoaderBox>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
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
    </Suspense>
  );
};
