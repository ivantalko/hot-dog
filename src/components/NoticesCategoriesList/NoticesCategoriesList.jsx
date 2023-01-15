import { useLocation } from 'react-router-dom';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const pathSlice = pathName.slice(9);

  return (
    <div>
      <div>
        {searchQuery}'s {pathSlice}
      </div>
    </div>
  );
};
