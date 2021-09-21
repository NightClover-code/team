//importing types & utils
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { blogSeoConfig, client } from '../../utils';
//importing components
import BlogNavBar from '../../components/Header/BlogNavBar';
import MainLayout from '../../layouts/MainLayout';
import SEO from '../../components/SEO';
import ArticleDetail from '../../components/ArticleDetail';
import { articleQuery, articlesQuery } from '../../graphql';
import { ArticleInterface } from '../../interfaces';

interface BlogDetailPageProps {
  article: ArticleInterface;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ article }) => {
  console.log(article);

  const layoutConfig = {
    NavBar: BlogNavBar,
    backgroundColor: '#ffffff',
  };

  return (
    <MainLayout {...layoutConfig}>
      <SEO {...blogSeoConfig} />
      <main className="wrapper">
        <div className="container">
          <ArticleDetail />
        </div>
      </main>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.id;

  const {
    data: { article },
  } = await client.query({
    query: articleQuery,
    variables: {
      slug,
    },
  });

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { articles },
  } = await client.query({
    query: articlesQuery,
  });

  const paths = articles.map((article: ArticleInterface) => ({
    params: { id: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetailPage;
