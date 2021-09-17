//importing types & utils
import { NextPage } from 'next';
import { blogSeoConfig } from '../../utils';
//importing components
import SEO from '../../components/SEO';

const BlogPage: NextPage = () => {
  return (
    <>
      <SEO {...blogSeoConfig} />
      <div className="wrapper"></div>
    </>
  );
};

export default BlogPage;
