import { db } from "@/utils/firebase";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import Link from "next/link";

const PostPage = ({ post }: { post: any }) => {
  const date = new Date(post.date.seconds * 1000);

  return (
    <main className="flex justify-center">
      <article className="container prose p-4">
        <aside>
          <Link href="/posts">
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            Geri
          </Link>
          <Image src={post.thumbnail} alt="title" width={600} height={400} />
          <div className="flex justify-center items-center">
            <small>{post.author}</small>&nbsp;•&nbsp;
            <small>
              <time dateTime={date.toISOString()}>
                {new Date(post.date.seconds * 1000).toDateString()}
              </time>
            </small>
          </div>
        </aside>
        <h1 className="mt-2">{post.title}</h1>
        <ReactMarkdown>{post.content.replace(/\\n/g, "\n")}</ReactMarkdown>
      </article>
    </main>
  );
};

export default PostPage;

// This function gets called at build time
export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(db, "blogs"));

  let paths: DocumentData[] = [];

  querySnapshot.forEach((doc) => {
    paths.push({
      params: { slug: doc.data().slug },
    });
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: { slug: string } }) {
  let post;

  try {
    const q = query(collection(db, "blogs"), where("slug", "==", params.slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size === 0) {
      console.log("No matching documents");
    } else {
      const doc = querySnapshot.docs[0];
      post = { ...doc.data(), date: doc.data().date.toJSON() };
    }
  } catch (error) {
    console.error("Error getting documents: ", error);
  }

  // Pass post data to the page via props
  return { props: { post } };
}
