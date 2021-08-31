import Image from 'next/image';

interface CardProps {
  description: string;
  imgSource: string;
  author: string;
  position: string;
}

const Card: React.FC<CardProps> = ({
  description,
  imgSource,
  author,
  position,
}) => {
  return (
    <div className="testimonials__card">
      <div className="stars__container"></div>
      <p>{description}</p>
      <div className="author__container">
        <div className="avatar__container">
          <Image
            src={imgSource}
            alt="testimonial-avatar"
            width="56"
            height="56"
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
