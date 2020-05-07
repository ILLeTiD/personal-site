import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const StyledNav = styled.nav`
  .header__menu {
    list-style: none;
    padding: 0 16px;
    display: flex;

    li {
      padding: 8px 16px;
    }

    a {
      color: ${({ theme }) => theme.linkColor};
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.linkColorHover};
        text-decoration: underline;
      }
    }
  }
`;
export const Nav = () => {
  return (
    <StyledNav className="header__nav">
      <ul className="header__menu">
        <li>
          <Link href="/articles">Blog</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
