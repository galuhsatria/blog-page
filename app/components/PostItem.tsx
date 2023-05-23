import Link from "next/link";
import React from "react";
import getPostMetadata from "./getPostMetaData";

const PostItem = () => {
  const postMetadata = getPostMetadata();
  return (
    <div className="layout my-10">
      <h1 className="text-2xl font-bold my-3">Feature Posts</h1>
      <ul className="grid lg:grid-cols-3 gap-3 sm:grid-cols-2">
        {postMetadata.map((post) => (
          <li className="bg-dark border-[1px] border-zinc-500 rounded-md p-3" key={post.slug}>
            <div className="mb-3">
              <img src={post.header} alt={post.title} className="h-52 w-full object-cover rounded-md" />
            </div>
            <p className="text-zinc-400 text-sm">{post.date}</p>
            <Link href={`/posts/${post.slug}`} className="text-green-500 text-lg font-bold hover:underline">
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-zinc-200">{post.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostItem;
