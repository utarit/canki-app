import { db } from "@/utils/firebase";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <main className="p-4 flex flex-col items-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">OCİT&apos;ten Paylaşımlar</h1>
      <ul className="flex flex-col gap-4 max-w-lg">
        {posts.map((post) => (
          <li
            key={post.id}
            className="card lg:card-side bg-white shadow-xl lg:h-64"
          >
            <figure className="relative w-auto h-52 lg:h-full lg:flex-[2]">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
              />
            </figure>
            <div className="card-body lg:flex-[3]">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.excerpt}</p>
              <div className="card-actions justify-end">
                <Link href={"/posts/" + post.slug} className="btn btn-primary">
                  Devamını oku
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export async function getStaticProps() {
  const querySnapshot = await getDocs(collection(db, "blogs"));

  let posts: DocumentData[] = [];

  querySnapshot.forEach((doc) => {
    posts.push({
      ...doc.data(),
      id: doc.id,
      date: doc.data().date.toJSON(),
    });
  });

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
