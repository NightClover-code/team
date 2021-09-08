//importing components
import Card from './Card';
//importing utils
import { isEven, testimonialCards } from '../../utils';
import { v4 as uuidv4 } from 'uuid';
import { ArrowBackIcon, ArrowForwardIcon } from '../Icons';

const Testimonials = () => {
  return (
    <section className="testimonials__section">
      <div className="container">
        <h1>What people say about Team</h1>
        <div className="cards__grid">
          {testimonialCards.map((card, index) => (
            <Card
              {...card}
              key={uuidv4()}
              style={{ height: isEven(index) ? '360px' : '' }}
            />
          ))}
        </div>
        <div className="arrows__container">
          <div className="arrow arrow__back">
            <ArrowBackIcon />
          </div>
          <div className="arrow arrow__forward">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
