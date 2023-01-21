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
  OurFriandsInfo,
  OurFriendsCard,
  OurFriendsInfo,
  OurFriendseEmailMailto,
  OurFriendsPhoneTel,
  OurFriendseAdressMap,
} from './OurFriends.styled';
import { nanoid } from 'nanoid';
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

  console.log('item', services);

  return (
    <>
      <OurFriendsBox>
        <OurFriendsBoxTitle>Our friends</OurFriendsBoxTitle>
        <OurFriendsCards>
          {' '}
          {services?.map(item => {
            return (
              <OurFriendsCard key={nanoid()}>
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
                  <OurFriandsInfo>
                    <OurFriendsTimeWork timeWork={item.workDays} />
                    <OurFriendsAdress>
                      Address:
                      <br />
                      <OurFriendseAdressMap>
                        {ourFriendsPlug(item.address)}
                      </OurFriendseAdressMap>
                    </OurFriendsAdress>
                    <OurFriendseEmail>
                      Email:<br/>
                      <OurFriendseEmailMailto href="mailto:{ourFriendsplug(item.email)}">
                        {ourFriendsPlug(item.email)}
                      </OurFriendseEmailMailto>
                    </OurFriendseEmail>
                    <OurFriendsPhone>
                      Phone:<br/>
                      <OurFriendsPhoneTel href="tel:{ourFriendsplug(item.phone)}">
                        {ourFriendsPlug(item.phone)}
                      </OurFriendsPhoneTel>
                    </OurFriendsPhone>
                  </OurFriandsInfo>
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
