import Image from 'next/image';

const Card = () => {
  return (
    <div className="blog__article">
      <div className="img__container">
        <Image
          src="https://res.cloudinary.com/achraf-dev/image/upload/v1630269985/hero_buymwb.jpg"
          width={367}
          height={200}
          alt="random"
        />
      </div>
      <div className="text__content">
        <h2>10 secrets for managing a remote team</h2>
        <p>
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand.
        </p>
        <div className="author__content">
          <div className="avatar__container">
            <Image
              src="https://res.cloudinary.com/achraf-dev/image/upload/v1630445340/jack-finnigan-rriAI0nhcbc-unsplash_jklbin.jpg"
              width="30"
              height="30"
              alt="random"
            />
          </div>
          <span>David Simons</span>
          <div className="vertical__line"></div>
          <span className="published__at">25 january 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
