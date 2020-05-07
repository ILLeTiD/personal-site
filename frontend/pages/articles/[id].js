import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import { DefaultPageContent } from "../../components/DefaultPageContent";
const ReactMarkdown = require("react-markdown");

function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <DefaultPageContent data={post} />;
}

// This function gets called at build time
export async function getStaticPaths() {
  const API_URL = process.env.API_URL || "http://localhost:1337";
  const res = await fetch(`${API_URL}/articles`);
  const posts = await res.json();
  const paths = posts.map((p) => {
    return {
      params: {
        id: `${p.id}`,
      },
    };
  });
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const API_URL = process.env.API_URL || "http://localhost:1337";
  const res = await fetch(`${API_URL}/articles/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;
