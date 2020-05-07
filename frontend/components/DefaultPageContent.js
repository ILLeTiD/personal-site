import * as React from "react";
import { Image } from "./Image";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import { HeroWithBg } from "./HeroWithBackground";

const StyledContent = styled.div`
  display: block;
  margin: 10px auto;
  text-align: left;
  width: 100%;
  .page {
    &__title {
      margin: 16px 0;
    }
  }
`;
export const DefaultPageContent = ({ data }) => {
  return (
    <StyledContent>
      <HeroWithBg title={data.title} image={data.image} />

      <ReactMarkdown source={data.content} escapeHtml={false} />
    </StyledContent>
  );
};
