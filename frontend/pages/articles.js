import * as React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { PostsGrid } from "../components/PostsGrid";
import { PostCard } from "../components/Card";

function Posts({ posts }) {
  if (!posts || !posts.length) {
    return (
      <h3>
        <br />
        <br />
        <br />
        Soon!
      </h3>
    );
  }
  return (
    <PostsGrid>
      {posts.map((p) => (
        <PostCard key={p.id} data={p} type="articles" />
      ))}
    </PostsGrid>
  );
}

// This also gets called at build time
export async function getStaticProps() {
  const API_URL = process.env.API_URL || "http://localhost:1337";
  const res = await fetch(`${API_URL}/articles`);
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts } };
}

export default Posts;
