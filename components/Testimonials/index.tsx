//importing hooks
import { useRef, useEffect } from 'react';
import { useResponsiveNum, useCounter } from '../../hooks';
//importing components
import Card from './Card';
import { ArrowBackIcon, ArrowForwardIcon } from '../Icons';
//importing utils
import { isEven, testimonialCards } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

const Testimonials = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const responsiveNum = useResponsiveNum();
  const [counter, setCounter] = useCounter();

  const onArrowRightClickHandler = () => {
    if (counter < responsiveNum) setCounter(counter + 1);
  };

  const onArrowLeftClickHandler = () => {
    if (counter > 0 && counter <= responsiveNum) setCounter(counter - 1);
  };

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.transform =
        'translateX(' +
        ((-gridRef.current.scrollWidth + gridRef.current.clientWidth) /
          responsiveNum) *
          counter +
        'px)';
      gridRef.current.style.transition = 'all 0.4s ease-in-out';
    }
  }, [counter, responsiveNum]);

  return (
    <section className="testimonials__section">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-delay="100">
          What people say about Team
        </h1>
        <div
          className="cards__grid"
          data-aos="fade-up"
          data-aos-delay="300"
          ref={gridRef}
        >
          {testimonialCards.map((card, index) => (
            <Card
              {...card}
              key={uuidv4()}
              style={{ height: isEven(index) ? '360px' : '' }}
            />
          ))}
        </div>
        <div className="arrows__container" data-aos="fade-left">
          <div
            className={`arrow arrow__back ${
              counter === 0 ? 'active__arrow' : ''
            }`}
            onClick={onArrowLeftClickHandler}
          >
            <ArrowBackIcon />
          </div>
          <div
            className={`arrow arrow__forward ${
              counter === responsiveNum ? 'active__arrow' : ''
            }`}
            onClick={onArrowRightClickHandler}
          >
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
