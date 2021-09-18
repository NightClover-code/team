//importing types & utils
import { NextPage } from 'next';
import { blogSeoConfig } from '../../utils';
//importing components
import SEO from '../../components/SEO';
import MainLayout from '../../layouts/MainLayout';
import BlogNavBar from '../../components/Header/BlogNavBar';
import Articles from '../../components/Articles';

const BlogPage: NextPage = () => {
  return (
    <MainLayout NavBar={BlogNavBar}>
      <SEO {...blogSeoConfig} />
      <div className="wrapper">
        <div className="container">
          <Articles />
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogPage;
