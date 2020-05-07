import * as React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;

  a {
    color: ${({ theme }) => theme.primary};
    &:hover {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
export const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};
