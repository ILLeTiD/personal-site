import * as React from "react";
import styled from "@emotion/styled";
import { Header } from "./Header";
import { Footer } from "./Footer";

const StyledWrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main {
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1400px;
  }
`;
export const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="main">
        <Header />
        {children}
      </div>
      <Footer>
        © {new Date().getFullYear()}. Source on <span> &nbsp;</span>
        <a href="https://github.com/ILLeTiD/personal-site" target="_blank">
          <span>&lt; </span> Github <span>&gt;</span>
        </a>
      </Footer>
    </StyledWrapper>
  );
};
