//importing types & utils
import { NextPage } from 'next';
import { blogSeoConfig } from '../../utils';
//importing components
import BlogNavBar from '../../components/Header/BlogNavBar';
import MainLayout from '../../layouts/MainLayout';
import SEO from '../../components/SEO';
import ArticleDetail from '../../components/ArticleDetail';

//TODO change seo config
const BlogDetailPage: NextPage = () => {
  return (
    <MainLayout NavBar={BlogNavBar} backgroundColor="#ffffff">
      <SEO {...blogSeoConfig} />
      <main className="wrapper">
        <div className="container">
          <ArticleDetail />
        </div>
      </main>
    </MainLayout>
  );
};

export default BlogDetailPage;
