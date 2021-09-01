import Card from './Card';
import { isEven, testimonialCards } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

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
      </div>
    </section>
  );
};

export default Testimonials;
