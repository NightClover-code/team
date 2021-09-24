//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { ArticleInterface } from '../../interfaces';
import { blogSeoConfig, client } from '../../utils';
import { articlesQuery } from '../../graphql';
//importing components
import SEO from '../../components/SEO';
import MainLayout from '../../layouts/MainLayout';
import BlogNavBar from '../../components/Header/BlogNavBar';
import Articles from '../../components/Articles';

interface BlogPageProps {
  articles: ArticleInterface[];
}

const BlogPage: NextPage<BlogPageProps> = ({ articles }) => {
  return (
    <MainLayout NavBar={BlogNavBar}>
      <SEO {...blogSeoConfig} />
      <main className="wrapper">
        <div className="container">
          <Articles articles={articles} />
        </div>
      </main>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  //fetching articles
  const limit = 9;

  const { data } = await client.query({
    query: articlesQuery,
    variables: { limit, offset: 0 },
  });

  const articles = data.articlesConnection.articles.map(
    (article: any) => article.node
  );

  return {
    props: {
      articles,
    },
  };
};

export default BlogPage;
