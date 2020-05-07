import * as React from "react";
import styled from "@emotion/styled";

const StyledTags = styled.ul`
  margin: 8px 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;

  li {
    font-size: 32px;
  }

  a,
  button {
    font-size: 12px;
    display: block;
    padding: 4px 8px;
    border-radius: 8px;
    height: 20px;
    line-height: 8px;
    border: 1px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.linkColor};

    &:hover {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.background};
    }
  }
`;

export const TagList = ({ tags }) => {
  return (
    <StyledTags>
      {tags.map((tag) => {
        return (
          <li>
            <button>{tag.name}</button>
          </li>
        );
      })}
    </StyledTags>
  );
};
