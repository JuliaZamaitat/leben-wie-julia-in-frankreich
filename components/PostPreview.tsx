import Link from 'next/link';
import Image from 'next/image';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="max-w-[80%] p-4">
      <div className="">
        <Link href={`/posts/${props.slug}`}>
          <Image
            src={`/images/${props.preview}`}
            alt="image"
            width={700}
            height={500}
          />
        </Link>
      </div>
      <p className="text-lg text-slate-400 pt-4">{props.date}</p>

      <Link href={`/posts/${props.slug}`}>
        <h2 className="text-2xl text-rose-400 hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-lg text-slate-700 pb-8">{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
