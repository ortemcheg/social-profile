import { ProfileHeader } from "./components/ProfileHeader";
import { SocialLinkBlock } from "./components/SocialLinksBlock";
import { BackgroundWrapper, CardWrapper, ImagePlaceHolder } from "./App.styles";
import { mockLinks } from "./mockData";
import profileImage from "./assets/250-88x88.jpg";

function App() {
  const userName = "Anna Smith";
  return (
    <BackgroundWrapper>
      <CardWrapper>
        <ImagePlaceHolder
          src={profileImage}
          alt={`Photograph of ${userName}`}
        />
        <ProfileHeader
          userName={userName}
          location="London, United Kingdom"
          userBio="Front-end developer and avid reader."
        />
        <SocialLinkBlock links={mockLinks} />
      </CardWrapper>
    </BackgroundWrapper>
  );
}

export default App;
