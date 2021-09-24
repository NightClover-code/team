//importing types & utils
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ArticleInterface } from '../../interfaces';
import { articleQuery, articlesQuery } from '../../graphql';
import { blogDetailSeoConfig, client, layoutConfig } from '../../utils';
//importing components
import BlogNavBar from '../../components/Header/BlogNavBar';
import MainLayout from '../../layouts/MainLayout';
import SEO from '../../components/SEO';
import ArticleDetail from '../../components/ArticleDetail';

interface BlogDetailPageProps {
  article: ArticleInterface;
}

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ article }) => {
  return (
    <MainLayout {...layoutConfig(BlogNavBar)}>
      <SEO {...blogDetailSeoConfig(article)} />
      <main className="wrapper">
        <div className="container">
          <ArticleDetail article={article} />
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
  const { data } = await client.query({
    query: articlesQuery,
    variables: { limit: 9, offset: 0 },
  });

  const articles = data.articlesConnection.articles.map(
    (article: any) => article.node
  );

  const paths = articles.map((article: ArticleInterface) => ({
    params: { id: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetailPage;
