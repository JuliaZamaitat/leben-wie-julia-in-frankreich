import getPostMetadata from '../components/getPostMetadata';
// import PostList from '../components/PostList';
import moment from 'moment';
import PostPreview from '../components/PostPreview';

const HomePage = () => {
  // const postMetadata = getPostMetadata().reverse();
  const postMetadata = getPostMetadata().sort((a, b) => {
    // Parse the dates using moment.js and compare them
    const dateA = moment(a.date, 'DD.MM.YY');
    const dateB = moment(b.date, 'DD.MM.YY');

    // Compare the dates using moment.js' comparison function
    return dateB.diff(dateA);
  });

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  // console.log(postMetadata);

  // const posts = postMetadata.map((post) => (
  //   <PostList key={post.slug} {...post} />
  // ));

  // return <div>{posts}</div>;
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-left">
        {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;
