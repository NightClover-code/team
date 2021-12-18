//importing types & utils
import FormInput from '../Forms/Input';
import { heroInputConfig } from '../../utils';
import { HeroInterface } from '../../interfaces';

interface HeroProps {
  hero: HeroInterface;
}

const Hero: React.FC<HeroProps> = ({ hero: { title, description } }) => {
  return (
    <section className="hero__section">
      <div className="hero__overlay">
        <div className="container">
          <div
            className="hero__content"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h1>{title}</h1>
            <p>{description}</p>
            <form
              className="newsletter__form"
              data-aos="fade-up"
              data-aos-delay="800"
              onSubmit={e => e.preventDefault()}
            >
              <FormInput style={heroInputConfig} />
              <button className="primary__button">Get Early Access</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
