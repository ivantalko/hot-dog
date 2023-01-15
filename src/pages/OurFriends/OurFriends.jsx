import { OurFriendsContainer, OurFriendsBox, OurFriendsBoxTitle, OurFriendsCards, OurFriendsCardSecondTitle,OurFriendsTimeWork, OurFriendsAdress, OurFriendseEmail, OurFriendsPhone } from './OurFriends.styled';


const OurFriends = () => {
  return (
  <OurFriendsContainer>
    <OurFriendsBox>
      <OurFriendsBoxTitle>Our friends</OurFriendsBoxTitle>
      <OurFriendsCards>
        <OurFriendsCardSecondTitle>friends name</OurFriendsCardSecondTitle>
        <div вставить шрифт>
          <div className="ourFriendsLogo"></div>
          <div className="ourFriandsInfo">
            <OurFriendsTimeWork>Time:<br/>вставить время</OurFriendsTimeWork>
            <OurFriendsAdress>Address:<br/>вставить адрес</OurFriendsAdress>OurFriendsPhone
            <OurFriendseEmail>Email:<br/>вставить email</OurFriendseEmail>
            <OurFriendsPhone>Phone:<br/>вставить phone</OurFriendsPhone>
          </div>
        </div>
      </OurFriendsCards>
    </OurFriendsBox>
    </OurFriendsContainer>
  );
};


export default OurFriends;
 