import { useEffect, useState } from 'react';
import { getServices } from 'services/API';
import { OurFriendsLogo, OurFriendsContainer, OurFriendsBox, OurFriendsBoxTitle, OurFriendsCards, OurFriendsCardSecondTitle,OurFriendsTimeWork, OurFriendsAdress, OurFriendseEmail, OurFriendsPhone, OurFriandsInfo, OurFriendsCard } from './OurFriends.styled';
import { nanoid } from 'nanoid';

const OurFriends = () => {
const [services, setServices] = useState([]);

useEffect(() => {
  const ourFriendsServices = async () =>{
    const data = await getServices()
    setServices(data)
  };
  ourFriendsServices();
},[]);

function ourFriendsplug(item){
if(!item){
  return "-----------------------------------"
}
return item
}

  
  return (
  <OurFriendsContainer>
    <OurFriendsBox>
      <OurFriendsBoxTitle>Our friends</OurFriendsBoxTitle>
      <OurFriendsCards> {services?.map(item => (
        <OurFriendsCard key={nanoid()}>
          <OurFriendsCardSecondTitle href={ourFriendsplug(item.url)} target="_blank">{ourFriendsplug(item.title)}</OurFriendsCardSecondTitle>
          <div>
             <OurFriendsLogo src={ourFriendsplug(item.imageUrl)} alt="logo"/>
             <OurFriandsInfo>
               <OurFriendsTimeWork>Time:<br/>c </OurFriendsTimeWork>
               <OurFriendsAdress>Address:<br/>{ourFriendsplug(item.address)}</OurFriendsAdress>
               <OurFriendseEmail>Email:<br/>{ourFriendsplug(item.email)}</OurFriendseEmail>
               <OurFriendsPhone>Phone:<br/>{ourFriendsplug(item.phone)}</OurFriendsPhone>
             </OurFriandsInfo>
           </div>
           </OurFriendsCard>
          ))}
        
      </OurFriendsCards>
    </OurFriendsBox>
    </OurFriendsContainer>
  );
};


export default OurFriends;
 