import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
// import getPostMetadata from './getPostMetadata';

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

const Post = (props: any) => {
  const slug = props.post.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-4xl text-rose-500">{post.data.title}</h1>
        <h2 className="text-xl text-gray-400 pt-1">{post.data.subtitle}</h2>
        <p className="text-rose-400">{post.data.date}</p>
      </div>

      <article className="prose mx-auto my-0 py-10">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default Post;
