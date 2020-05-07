import * as React from "react";
import styled from "@emotion/styled";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(350px, 1fr));
  grid-gap: 30px;
  margin: 16px 0;
`;
export const PostsGrid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};
