import { nanoid } from 'nanoid';
import { useState } from 'react';
import {
  OurFriendsDefis,
  OurFriendsTimeWorks,
} from './OurFriendsTimeWork.styled';
import { OurFriendsModal } from './OurFriendsModal/OurFriendsModal';

export const OurFriendsTimeWork = ({ timeWork, idTime }) => {
  let timeOfWork;

  function ourFriendsAdress(items) {
    if (!items) {
      return '---------------';
    }    

    let date = new Date();
    let dayOfWeek = date.getDay();

    switch (dayOfWeek) {
      case 0:
        timeOfWork = 6;
        break;
      case 1:
        timeOfWork = 0;
        break;
      case 2:
        timeOfWork = 1;
        break;
      case 3:
        timeOfWork = 2;
        break;
      case 4:
        timeOfWork = 3;
        break;
      case 5:
        timeOfWork = 4;
        break;
      case 6:
        timeOfWork = 5;
        break;
      default:
    }
    return;
  }

  const [ourFriendsModalBul, setOurFriendsModalBul] = useState(false);
  const [cordinate, setCordinate] = useState({});

  const OpenModal = event => {
    document.querySelector(`#\\3${idTime} a`).classList.add('active');
    setCordinate(event.target.getBoundingClientRect());
    setOurFriendsModalBul(true);
  };

  let cutFirstZero = s => {
    if (s[0] === '0') {
      s = s.slice(1);
      return s;
    }
    return s;
  };

  return (
    <OurFriendsTimeWorks id={`${idTime}a`}>
      Time:
      <br />
      {ourFriendsAdress(timeWork)}
      {timeWork &&
        timeWork.map(
          (item, index) =>
            index === timeOfWork &&
            item.isOpen && (
              <div key={nanoid()}>
                <p onClick={OpenModal}>
                  {item.isOpen && cutFirstZero(item.from)}{' '}
                  <OurFriendsDefis>-</OurFriendsDefis> {cutFirstZero(item.to)}
                </p>
                {ourFriendsModalBul && (
                  <OurFriendsModal
                    id={`${idTime}b`}
                    timeWork={timeWork}
                    cordinate={cordinate}
                    setOurFriendsModalBul={setOurFriendsModalBul}
                    idTime={idTime}
                  />
                )}{' '}
              </div>
            )
        )}
      {timeWork &&
        timeWork.map(
          (item, index) =>
            index === timeOfWork &&
            !item.isOpen && (
              <div key={nanoid()}>
                <p onClick={OpenModal}>We are not working today</p>
                {ourFriendsModalBul && (
                  <OurFriendsModal
                    id={`${idTime}b`}
                    timeWork={timeWork}
                    cordinate={cordinate}
                    setOurFriendsModalBul={setOurFriendsModalBul}
                    idTime={idTime}
                  />
                )}
              </div>
            )
        )}
    </OurFriendsTimeWorks>
  );
};
