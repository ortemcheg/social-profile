import styled from "@emotion/styled";
import { ProfileHeader } from "./components/ProfileHeader";

const BackgroundWrapper = styled.div`
  background-color: #000;
  min-height: 100%;
  font-family: sans-serif;
`;
const CardWrapper = styled.div`
  width: 327px;
  margin: 0 auto;
  outline: 1px solid red;
  background: #333;
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
      </CardWrapper>
    </BackgroundWrapper>
  );
}

export default App;
