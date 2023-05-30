import getPostMetadata from '../components/getPostMetadata';
import PostList from '../components/PostList';
import moment from 'moment';

const HomePage = () => {
  // const postMetadata = getPostMetadata().reverse();
  const postMetadata = getPostMetadata().sort((a, b) => {
    // Parse the dates using moment.js and compare them
    const dateA = moment(a.date, 'DD.MM.YY');
    const dateB = moment(b.date, 'DD.MM.YY');

    // Compare the dates using moment.js' comparison function
    return dateB.diff(dateA);
  });

  console.log(postMetadata);

  const posts = postMetadata.map((post) => (
    <PostList key={post.slug} {...post} />
  ));

  return <div>{posts}</div>;
};

export default HomePage;
