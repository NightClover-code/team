//importing utils
import FormInput from '../Forms/Input';
import { heroInputConfig } from '../../utils';

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="hero__overlay">
        <div className="container">
          <div
            className="hero__content"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <h1>Instant collaboration for remote teams</h1>
            <p>
              The easiest and fastest way to share work with groups and to
              simplify project management.
            </p>
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
