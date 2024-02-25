import { useMemo } from "react";
import styled from "@emotion/styled";

const SocialLink = styled.a`
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
const StyledList = styled.ul`
  margin-top: 24px;
  list-style-type: none;
  padding: 0;
`;

export interface SocialLink {
  linkText: string;
  linkHref: URL["href"];
}
interface SocialLinksBlockProps {
  links: SocialLink[];
}

export const SocialLinkBlock = ({ links }: SocialLinksBlockProps) => {
  const renderedLinks = useMemo(
    () =>
      links.map((link) => (
        <li>
          <SocialLink href={link.linkHref}>{link.linkText}</SocialLink>
        </li>
      )),
    [links]
  );
  return <StyledList>{renderedLinks}</StyledList>;
};
