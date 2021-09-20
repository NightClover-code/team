//importing types
import { ArticleDetail } from '../../../interfaces';
//importing components
import Image from 'next/image';
import Link from 'next/link';
import Author from '../../Author';

interface ArticleProps {
  article: ArticleDetail;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const { title, description, image } = article;

  return (
    <Link href="/blog/56" passHref>
      <div className="blog__article">
        <div className="img__container">
          <Image src={image.url} layout="fill" objectFit="cover" alt="random" />
        </div>
        <div className="text__content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Author author={article.author} />
        </div>
      </div>
    </Link>
  );
};

export default Article;
