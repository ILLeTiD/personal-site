import * as React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Image } from "./Image";
import { TagList } from "./TagList";

const StyledCard = styled.section`
  display: block;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 4px 0 rgba(100, 100, 100, 0.6);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(100, 100, 100, 0.6);
    transform: translate(0, -1px);

    .card__title {
      text-decoration: underline;
    }
  }

  .card {
    &__wrapper {
      padding: 16px;
    }

    &__title {
      color: ${({ theme }) => theme.text};
      text-decoration: none;

      & > * {
        color: inherit;
        text-decoration: inherit;
      }
    }

    &__text {
      margin: 8px 0;
    }

    &__more {
      color: ${({ theme }) => theme.text};
      text-decoration: none;
    }
  }
`;
export const PostCard = ({ data, type }) => {
  return (
    <StyledCard className={"card"}>
      <Link href={`/${type}/${data.id}`}>
        <a>
          <Image imageData={data.image} />
        </a>
      </Link>
      <div className="card__wrapper">
        <TagList tags={data.tags} />
        <h3 className="card__title">
          <Link href={`/${type}/${data.id}`}>{data.title}</Link>
        </h3>
        <p className="card__text">{data.excerpt}</p>
        {/*<Link className="card__more" href="/">*/}
        {/*  Read more*/}
        {/*</Link>*/}
      </div>
    </StyledCard>
  );
};
