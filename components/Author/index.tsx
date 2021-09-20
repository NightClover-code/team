import Image from 'next/image';
import { AuthorDetail } from '../../interfaces';

interface AuthorProps {
  author: AuthorDetail;
}

const Author: React.FC<AuthorProps> = ({ author }) => {
  const { avatar, name, publishDate } = author;

  return (
    <div className="author__content">
      <div className="avatar__container">
        <Image src={avatar.url} layout="fill" alt="random" objectFit="cover" />
      </div>
      <div className="author__info">
        <span>{name}</span>
        <div className="vertical__line"></div>
        <span className="published__at">{publishDate}</span>
      </div>
    </div>
  );
};

export default Author;
