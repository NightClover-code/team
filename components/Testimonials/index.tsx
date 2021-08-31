import Card from './Card';
import { testimonialCards } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

const Testimonials = () => {
  return (
    <section className="testimonials__section">
      <div className="container">
        <h1>What people say about Team</h1>
        <div className="cards__grid">
          {testimonialCards.map(card => (
            <Card {...card} key={uuidv4()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
