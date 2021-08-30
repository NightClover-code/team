import { advantagesConfig } from '../../utils';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const Advantages = () => (
  <section className="advantages__section">
    <div className="container">
      {advantagesConfig.map(_advantage => (
        <Item {..._advantage} key={uuidv4()} />
      ))}
    </div>
  </section>
);

export default Advantages;
