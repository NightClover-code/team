//importing components
import Item from './Item';
//importing utils
import { advantagesConfig } from '../../utils';
import { v4 as uuidv4 } from 'uuid';

const Advantages = () => (
  <section className="advantages__section">
    <div className="container">
      {advantagesConfig.map((_advantage, index) => (
        <Item {..._advantage} key={uuidv4()} order={index} />
      ))}
    </div>
  </section>
);

export default Advantages;
