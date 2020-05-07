import React, { useEffect } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Image } from "../components/Image";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import { DefaultPageContent } from "../components/DefaultPageContent";

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

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultPageContent data={data} />
    </>
  );
}

export async function getStaticProps(context) {
  const API_URL = process.env.API_URL || "http://localhost:1337";
  const homePageDataRaw = await fetch(`${API_URL}/about`);
  const data = await homePageDataRaw.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
