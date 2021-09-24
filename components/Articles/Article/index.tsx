//importing types
import { ArticleInterface } from '../../../interfaces';
//importing components
import Image from 'next/image';
import Link from 'next/link';
import Author from '../../Author';

interface ArticleProps {
  article: ArticleInterface;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const { title, description, image, slug } = article;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="blog__article">
        <div className="img__container">
          <Image src={image.url} layout="fill" objectFit="cover" alt="random" />
        </div>
        <div className="text__content">
          <div className="text__info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="author">
            <Author author={article.author} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Article;
