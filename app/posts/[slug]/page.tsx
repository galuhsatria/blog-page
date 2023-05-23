import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../components/getPostMetaData";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="layout">
      <div className="my-12">
        <div className="mb-3">
          <img src={post.data.header} alt={post.data.title} className="h-64 w-full object-cover rounded-md" />
        </div>
        <h1 className="text-2xl text-green-400 font-bold ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">Written On {post.data.date} by pixegami</p>
      </div>

      <article className="prose text-white prose-th:text-green-400 prose-strong:text-white prose-blockquote:text-white prose-headings:text-white prose-headings:font-bold prose-a:text-green-400 prose-code:text-white">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
