import * as React from "react";
import styled from "@emotion/styled";
import { useTheme } from "../utils/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
const HeaderStyled = styled.header`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};

  .header__theme-switcher {
    color: ${({ theme }) => theme.primary};
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
  .header__logo {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSizeTitle};
    cursor: pointer;
  }

  .header__content {
    display: flex;
  }
`;
export const Header = () => {
  const themeState = useTheme();

  return (
    <HeaderStyled>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div className="header__content">
        <Nav />
        <button
          className="header__theme-switcher"
          onClick={() => themeState.toggle()}
        >
          {themeState.dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </HeaderStyled>
  );
};
