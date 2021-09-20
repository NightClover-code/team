//importing types
import { ArticleDetail } from '../../../interfaces';
//importing components
import Image from 'next/image';

interface ArticleProps {
  article: ArticleDetail;
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  const { title, description, image } = article;
  const { avatar, name, publishDate } = article.author;

  return (
    <div className="blog__article">
      <div className="img__container">
        <Image src={image.url} layout="fill" objectFit="cover" alt="random" />
      </div>
      <div className="text__content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="author__content">
          <div className="avatar__container">
            <Image
              src={avatar.url}
              layout="fill"
              alt="random"
              objectFit="cover"
            />
          </div>
          <div className="author__info">
            <span>{name}</span>
            <div className="vertical__line"></div>
            <span className="published__at">{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
