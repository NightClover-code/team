import Image from 'next/image';
import { StarsIcon } from '../../Icons';

export interface CardProps {
  description: string;
  imgSource: string;
  author: string;
  position: string;
  imgPosition: string;
}

const Card: React.FC<CardProps> = ({
  description,
  imgSource,
  author,
  position,
  imgPosition,
}) => {
  return (
    <div className="testimonials__card">
      <div className="stars__container">
        <StarsIcon />
      </div>
      <p>{description}</p>
      <div className="author__container">
        <div className="avatar__container">
          <Image
            src={imgSource}
            alt="testimonial-avatar"
            layout="fill"
            objectFit="cover"
            objectPosition={imgPosition}
          />
        </div>
        <div className="author__content">
          <h4>{author}</h4>
          <span>{position}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
