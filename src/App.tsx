import { ProfileHeader } from "./components/ProfileHeader";
import { SocialLinkBlock } from "./components/SocialLinksBlock";
import { BackgroundWrapper, CardWrapper, ImagePlaceHolder } from "./App.styles";
import { mockLinks } from "./mockData";

function App() {
  return (
    <BackgroundWrapper>
      <CardWrapper>
        <ImagePlaceHolder />
        <ProfileHeader
          userName="Jessica Randall"
          location="London, United Kingdom"
          userBio="Front-end developer and avid reader."
        />
        <SocialLinkBlock links={mockLinks} />
      </CardWrapper>
    </BackgroundWrapper>
  );
}

export default App;
