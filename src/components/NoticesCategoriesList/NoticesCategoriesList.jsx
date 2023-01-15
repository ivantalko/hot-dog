import { useLocation } from 'react-router-dom';
import { FakeNoticesCardData } from 'data/FakeNoticesCardData';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const location = useLocation();
  const pathName = location.pathname;
  const pathSlice = pathName.slice(9);

  console.log(FakeNoticesCardData[1].category[1]);

  return (
    <div>
      <div>
        <img src={FakeNoticesCardData[0].src} alt="" />
        {searchQuery}'s {pathSlice}
      </div>
    </div>
  );
};
