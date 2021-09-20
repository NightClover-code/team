//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { blogSeoConfig } from '../../utils';
//importing components
import SEO from '../../components/SEO';
import MainLayout from '../../layouts/MainLayout';
import BlogNavBar from '../../components/Header/BlogNavBar';
import Articles from '../../components/Articles';
import { client } from '../_app';
import { articlesQuery } from '../../graphql';

interface BlogPageProps {
  articles: any;
}

const BlogPage: NextPage<BlogPageProps> = ({ articles }) => {
  console.log(articles);

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

export const getStaticProps: GetStaticProps = async () => {
  //fetching articles
  const {
    data: { articles },
  } = await client.query({
    query: articlesQuery,
  });

  return {
    props: {
      articles,
    },
  };
};

export default BlogPage;
