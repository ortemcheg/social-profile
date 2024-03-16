import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 24px;
  text-align: center;
`;
export const UserName = styled.h2`
  color: #fff;
`;
export const UserLocation = styled.p`
  color: #c4f82a;
`;

export const UserProfileAbout = styled.p`
  margin-top: 24px;
  color: white;
  &::before,
  &::after {
    content: '"';
  }
`;
