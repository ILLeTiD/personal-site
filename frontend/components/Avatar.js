import * as React from "react";
import { Image } from "./Image";
import styled from "@emotion/styled";

const StyledAvatar = styled.div`
  display: block;
  margin: 10px auto;
  border: 5px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  height: 300px;
  width: 300px;
  overflow: hidden;
`;
export const Avatar = ({ imageData }) => {
  return (
    <StyledAvatar>
      <Image imageData={imageData} />
    </StyledAvatar>
  );
};
