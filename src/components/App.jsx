import UserPage from 'pages/UserPage/UserPage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import OurFriends from '../pages/OurFriends/OurFriends'
import { Notices } from '../pages/NoticesPage/NoticesPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { NoticiesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { useState } from 'react';
import { Home } from './Home/Home';
import { NewsPage } from 'pages/NewsPage/NewsPage';
// import { Notices } from 'pages/NoticesPage/NoticesPage';
export const App = () => {
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

        <Route path="friends" element={<OurFriends/>} />
        <Route path="login" element={<>login Page</>} />
        <Route path="register" element={<>register Page</>} />
        <Route path="user" element={<>user Page</>} />
        <Route path="friends" element={<>friends Page</>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="user" element={<UserPage />} />
      </Route>
    </Routes>
  );
};
