import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Notices } from './NoticesPage/NoticesPage';
// import { CategoryName } from './Notices/Notices';
// import { NoticiesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Home Page</>} />
        <Route path="news" element={<>News Page</>} />
        <Route path="notices" element={<Notices />}>
          <Route path=":CategoryName" element={<>NoticiesCategoriesList</>}>
            <Route path="sell" element={<>sell page</>} />
            <Route path="lost-found" element={<>lost-found page</>} />
            <Route path="for-free" element={<>for-free page</>} />
            <Route path="favorite" element={<>favorite page</>} />
            <Route path="own" element={<>own page</>} />
          </Route>
        </Route>

        <Route path="friends" element={<>friends Page</>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="user" element={<>user Page</>} />
      </Route>
    </Routes>
  );
};
