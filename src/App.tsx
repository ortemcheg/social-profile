import { ProfileHeader } from "./components/ProfileHeader";
import { SocialLink, SocialLinkBlock } from "./components/SocialLinksBlock";
import { BackgroundWrapper, CardWrapper, ImagePlaceHolder } from "./App.styles";

const mockLinks: SocialLink[] = [
  {
    linkText: "GitHub",
    linkHref: "#",
  },
  {
    linkText: "Frontend Mentor",
    linkHref: "#",
  },
  {
    linkText: "LinkedIn",
    linkHref: "#",
  },
  {
    linkText: "Twitter",
    linkHref: "#",
  },
  {
    linkText: "Instagram",
    linkHref: "https://instagram.com/tyoma.deev",
  },
];

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
