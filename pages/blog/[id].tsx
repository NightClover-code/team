//importing types & utils
import { NextPage } from 'next';
import { blogSeoConfig } from '../../utils';
//importing components
import BlogNavBar from '../../components/Header/BlogNavBar';
import MainLayout from '../../layouts/MainLayout';
import SEO from '../../components/SEO';

//TODO change seo config
const BlogDetailPage: NextPage = () => {
  return (
    <MainLayout NavBar={BlogNavBar}>
      <SEO {...blogSeoConfig} />
      <main className="wrapper">
        <div className="container"></div>
      </main>
    </MainLayout>
  );
};

export default BlogDetailPage;
