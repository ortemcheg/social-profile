import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  text-align: center;
`;
const UserName = styled.h2`
  color: #fff;
`;
const UserLocation = styled.p`
  color: #c4f82a;
`;

const UserProfileAbout = styled.p`
  margin-top: 24px;
  color: white;
  &::before,
  &::after {
    content: '"';
  }
`;

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
