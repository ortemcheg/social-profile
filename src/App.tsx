import styled from "@emotion/styled";
import { ProfileHeader } from "./components/ProfileHeader";
import { SocialLink, SocialLinkBlock } from "./components/SocialLinksBlock";

const BackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  min-height: 100%;
  font-family: sans-serif;
`;
const CardWrapper = styled.div`
  width: 327px;
  margin: 0 auto;
  background: #1f1f1f;
  border-radius: 12px;
  padding: 24px;
`;

const ImagePlaceHolder = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 auto;
  background-color: #666;
  border-radius: 50%;
`;

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
