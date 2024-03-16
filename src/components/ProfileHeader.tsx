import {
  UserLocation,
  UserName,
  UserProfileAbout,
  Wrapper,
} from "./ProfileHeader.styles";
interface ProfileHeaderProps {
  userBio: string;
  userName: string;
  location: string;
}
export const ProfileHeader = ({
  userBio,
  userName,
  location,
}: ProfileHeaderProps) => {
  return (
    <Wrapper>
      <UserName>{userName}</UserName>
      <UserLocation>{location}</UserLocation>
      <UserProfileAbout>{userBio}</UserProfileAbout>
    </Wrapper>
  );
};
