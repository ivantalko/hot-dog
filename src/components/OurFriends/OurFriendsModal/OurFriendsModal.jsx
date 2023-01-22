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
  idTime,
}) => {
  const ourFriendsModalRoot = document.getElementById('ourFriendsModal-root');
  useEffect(() => {
    document.addEventListener('keydown', ourFriendsHandleKeyDown);
    return () => {
      document.removeEventListener('keydown', ourFriendsHandleKeyDown);
    };
  }, []);



  const ourFriendsHandleKeyDown = event => {
    if (event.code === 'Escape') setOurFriendsModalBul(false);
    document.querySelector(`#\\3${idTime} a`).classList.remove('active');};

  const ourFriendsCloseModal = event => {
    if (event.target === event.currentTarget) {
      setOurFriendsModalBul(false);
      document.querySelector(`#\\3${idTime} a`).classList.remove('active');
    }
  };

  let cutFirstZero = s => {
    if (s[0] === '0') {
      s = s.slice(1);
      return s;
    }
    return s;
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
