import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  OurFriendsModalDay,
  OurFriendsModalDays,
  OurFriendsModalOverlay,
  OurFriendsModalStyled,
  OurFriendsModalTimes,
  OurFriendsModalTime,
} from './OurFriendsModal.styled';

export const OurFriendsModal = ({
  setOurFriendsModalBul,
  cordinate,
  timeWork,
}) => {
  const ourFriendsModalRoot = document.getElementById('ourFriendsModal-root');
  console.log('cordinate', cordinate);
  useEffect(() => {
    document.addEventListener('keydown', ourFriendsHandleKeyDown);
    return;
  }, []);

  const ourFriendsHandleKeyDown = event => {
    if (event.code === 'Escape') setOurFriendsModalBul(false);
  };

  const ourFriendsCloseModal = event => {
    console.log('event', event);
    if (event.target === event.currentTarget) {
      setOurFriendsModalBul(false);
    }
  };

  let cutFirstZero = (s) => {
    if (s[0] === '0'){
      s = s.slice(1)
      return s
    } 
    return s
  };

  return createPortal(
    <>
      <OurFriendsModalOverlay onClick={ourFriendsCloseModal}>
        <OurFriendsModalStyled cordinate={cordinate}>
          <OurFriendsModalDays>
            <OurFriendsModalDay>MN</OurFriendsModalDay>
            <OurFriendsModalDay>TU</OurFriendsModalDay>
            <OurFriendsModalDay>WE</OurFriendsModalDay>
            <OurFriendsModalDay>TH</OurFriendsModalDay>
            <OurFriendsModalDay>FR</OurFriendsModalDay>
            <OurFriendsModalDay>SA</OurFriendsModalDay>
            <OurFriendsModalDay>SU</OurFriendsModalDay>
          </OurFriendsModalDays>
          <OurFriendsModalTimes>
            {timeWork?.map(item => {
              return (
                <OurFriendsModalTime key={nanoid()}>
                  {item.isOpen && cutFirstZero(item.from)}-{item.to}
                </OurFriendsModalTime>
              );
            })}
          </OurFriendsModalTimes>
        </OurFriendsModalStyled>
      </OurFriendsModalOverlay>
    </>,
    ourFriendsModalRoot
  );
};
