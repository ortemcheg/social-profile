import { useMemo } from "react";
import styled from "@emotion/styled";

const SocialLink = styled.a``;
const StyledList = styled.ul``;

interface SocialLink {
  linkText: string;
  linkHref: URL["href"];
}
interface SocialLinksBlock {
  links: SocialLink[];
}

export const SocialLinkBlock = ({ links }: SocialLinksBlock) => {
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
