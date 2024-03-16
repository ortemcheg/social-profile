import { useMemo } from "react";
import { SocialLink, StyledList } from "./SocialLinksBlock.styles";
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
