import * as React from "react";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import styled from "@emotion/styled";

const getIcon = (name) => {
  switch (name) {
    case "twitter":
      return <IoLogoTwitter />;
    case "linkedin":
      return <IoLogoLinkedin />;
    case "github":
      return <IoLogoGithub />;
    default:
      return name;
  }
};
const StyledSocList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;

  li {
    font-size: 32px;
  }

  a {
    color: ${({ theme }) => theme.linkColor};

    &:hover {
      color: ${({ theme }) => theme.linkColorHover};
    }
  }
`;

export const SocialsList = ({ socials }) => {
  return (
    <StyledSocList>
      {socials.map((soc) => {
        return (
          <li>
            <a target="_blank" href={soc.link} title={soc.name}>
              {getIcon(soc.name)}
            </a>
          </li>
        );
      })}
    </StyledSocList>
  );
};
