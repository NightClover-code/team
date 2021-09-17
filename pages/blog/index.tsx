//importing types & utils
import { NextPage } from 'next';
import { blogSeoConfig } from '../../utils';
//importing components
import SEO from '../../components/SEO';
import MainLayout from '../../layouts/MainLayout';

const BlogPage: NextPage = () => {
  return (
    <MainLayout>
      <SEO {...blogSeoConfig} />
      <div className="wrapper"></div>
    </MainLayout>
  );
};

export default BlogPage;
