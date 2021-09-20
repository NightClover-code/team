import Author from '../Author';

const ArticleDetail = () => {
  const author = {
    avatar: {
      url: 'https://media.graphcms.com/zIPyLMdGTPuEfmMQfEbC',
    },
    description:
      'Travel evangelist. Coffee fanatic. Subtly charming introvert. Troublemaker. Writer.',
    name: 'Theresa Webb',
    publishDate: '9 january 2021',
  };

  return (
    <section className="article__detail">
      <h1>10 secrets for managing a remote team</h1>
      <Author author={author} />
    </section>
  );
};

export default ArticleDetail;
