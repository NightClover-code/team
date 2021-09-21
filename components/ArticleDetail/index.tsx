import Image from 'next/image';
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
      <div className="article__detail__header">
        <h1>10 secrets for managing a remote team</h1>
        <Author author={author} />
      </div>
      <div className="img__container">
        <Image
          src="https://media.graphcms.com/C5mAVqJRnWMCT336RzsC"
          layout="fill"
          objectFit="cover"
          alt="random"
        />
      </div>
    </section>
  );
};

export default ArticleDetail;
