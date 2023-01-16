import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Notices } from '../pages/NoticesPage/NoticesPage';
import { NoticiesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { useState } from 'react';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Home Page</>} />
        <Route path="news" element={<>News Page</>} />
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

        <Route path="friends" element={<>friends Page</>} />
        <Route path="login" element={<>login Page</>} />
        <Route path="register" element={<>register Page</>} />
        <Route path="user" element={<>user Page</>} />
      </Route>
    </Routes>
  );
};
