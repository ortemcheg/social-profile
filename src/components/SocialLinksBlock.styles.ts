import styled from "@emotion/styled";

export const SocialLink = styled.a`
  display: inline-block;
  color: #fff;
  padding: 12px;
  text-decoration: none;
  font-weight: bold;
  width: 100%;
  border-radius: 12px;
  background-color: #333;
  text-align: center;

  //   & + & {
  //     margin-top: 12px; // doesn't work in @emotion/styled :(
  //   }

  margin-bottom: 12px; // TODO Fix extraneous bottom padding
`;
export const StyledList = styled.ul`
  margin-top: 24px;
  list-style-type: none;
  padding: 0;
`;
