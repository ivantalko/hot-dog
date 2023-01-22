import { useEffect, useState } from 'react';
import { getServices } from 'services/API';
import {
  OurFriendsLogo,
  OurFriendsBox,
  OurFriendsBoxTitle,
  OurFriendsCards,
  OurFriendsCardSecondTitle,
  OurFriendsAdress,
  OurFriendseEmail,
  OurFriendsPhone,
  OurFriendsCard,
  OurFriendsInfo,
  OurFriendseEmailMailto,
  OurFriendsPhoneTel,
  OurFriendseAdressMap,
  OurFriendsInfoItem,
} from './OurFriends.styled';
// import { nanoid } from 'nanoid';
import ourFriendsBaseLogo from '../../helpers/images/ourFriends/ourFriendsBaseLogo.png';
import { OurFriendsTimeWork } from 'components/OurFriends/OurFriendsTimeWork';

const OurFriends = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const ourFriendsServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    ourFriendsServices();
  }, []);

  function ourFriendsPlug(item) {
    if (!item) {
      return '-----------------------------------';
    }
    return item;
  }

  function ourFriendsLogo(item) {
    if (!item) {
      return ourFriendsBaseLogo;
    }
    return item;
  }

  return (
    <>
      <OurFriendsBox>
        <OurFriendsBoxTitle>Our friends</OurFriendsBoxTitle>
        <OurFriendsCards>
          {' '}
          {services?.map((item, index) => {
            return (
              <OurFriendsCard key={index} id={index}>
                <OurFriendsCardSecondTitle
                  href={ourFriendsPlug(item.url)}
                  target="_blank"
                >
                  {ourFriendsPlug(item.title)}
                </OurFriendsCardSecondTitle>
                <OurFriendsInfo>
                  <OurFriendsLogo
                    src={ourFriendsLogo(item.imageUrl)}
                    alt="logo"
                  />
                  <OurFriendsInfoItem>
                    <OurFriendsTimeWork
                      timeWork={item.workDays}
                      idTime={index}
                    />
                    <OurFriendsAdress>
                      Address:
                      <br />
                      <OurFriendseAdressMap>
                        {ourFriendsPlug(item.address)}
                      </OurFriendseAdressMap>
                    </OurFriendsAdress>
                    <OurFriendseEmail>
                      Email:
                      <br />
                      <OurFriendseEmailMailto href="mailto:{ourFriendsplug(item.email)}">
                        {ourFriendsPlug(item.email)}
                      </OurFriendseEmailMailto>
                    </OurFriendseEmail>
                    <OurFriendsPhone>
                      Phone:
                      <br />
                      <OurFriendsPhoneTel href="tel:{ourFriendsplug(item.phone)}">
                        {ourFriendsPlug(item.phone)}
                      </OurFriendsPhoneTel>
                    </OurFriendsPhone>
                  </OurFriendsInfoItem>
                </OurFriendsInfo>
              </OurFriendsCard>
            );
          })}
        </OurFriendsCards>
      </OurFriendsBox>
    </>
  );
};

export default OurFriends;
