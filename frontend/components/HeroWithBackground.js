import * as React from "react";
import { Image } from "./Image";
import styled from "@emotion/styled";

const StyledHero = styled.div`
  position: relative;
  background: url(${(props) => props.image}) 50%/50%;
  background-size: cover;
  width: 100%;
  text-align: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  & > * {
    z-index: 2;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background: ${({ theme }) => theme.primary};
    opacity: 0.3;
  }

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.white};
  }
`;
export const HeroWithBg = ({ image, title }) => {
  const API_URL = process.env.API_URL || "http://localhost:1337";
  const imageUrl = image && `${API_URL}${image.formats.large.url}`;
  return (
    <StyledHero image={imageUrl}>
      <h1>{title}</h1>
    </StyledHero>
  );
};
