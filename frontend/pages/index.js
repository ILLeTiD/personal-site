import React, { useEffect } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Image } from "../components/Image";
import { SocialsList } from "../components/Socials";
import styled from "@emotion/styled";
import { Avatar } from "../components/Avatar";

const StyledHomeMain = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  flex: 1;
  .home-page {
    &__text {
      font-size: ${({ theme }) => theme.fontSizeTitle};
      margin: 24px 0;
    }
  }
`;

export default function Home({ homePageData }) {
  return (
    <>
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledHomeMain className="home-page">
        <h1 className="home-page__title">{homePageData.hero_text}</h1>
        <Avatar className="home-page__photo" imageData={homePageData.avatar} />
        <div className="home-page__text">{homePageData.content}</div>
        <div>You can reach me on: </div>
        <SocialsList socials={homePageData.Socials} />
      </StyledHomeMain>
    </>
  );
}

export async function getStaticProps(context) {
  const API_URL = process.env.API_URL || "http://localhost:1337";
  const homePageDataRaw = await fetch(`${API_URL}/home-page`);
  const homePageData = await homePageDataRaw.json();
  return {
    props: { homePageData }, // will be passed to the page component as props
  };
}
