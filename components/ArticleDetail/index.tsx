//importing types
import { ArticleInterface } from '../../interfaces';
//importing components
import Image from 'next/image';
import Author from '../Author';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Disqus from 'disqus-react';

interface ArticleDetailProps {
  article: ArticleInterface;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const { image, content, author, title, slug } = article;
  const disqusShortname = 'team-8';
  const disqusConfig = {
    url: 'http://localhost:3000',
    identifier: slug,
    title,
  };

  return (
    <section className="article__detail">
      <div className="article__detail__header">
        <h1>{title}</h1>
        <Author author={author} />
      </div>
      <div className="article__detail__body">
        <div className="img__container">
          <Image src={image.url} layout="fill" alt="random" />
        </div>
        <div className="article__body__container">
          <div className="content">
            <RichText content={content.raw.children} />
          </div>
          <div className="author__container">
            <div className="avatar__container">
              <Image
                src={author.avatar.url}
                alt="testimonial-avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="author__content">
              <span>Written By</span>
              <h4>{author.name}</h4>
              <p>{author.description}</p>
            </div>
          </div>
          <div className="comment__section">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
