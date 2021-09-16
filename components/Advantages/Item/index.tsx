//importing components
import Image from 'next/image';
import Content from '../../Content';
//importing utils
import { isEven } from '../../../utils';

export interface ItemProps {
  title: string;
  description: string;
  imgSource: string;
  imgAlt: string;
  order?: number;
}

const Item: React.FC<ItemProps> = props => {
  return (
    <div className="advantages__item">
      {isEven(props.order!) ? (
        <>
          <Content {...props} />
          <div
            className="img__container"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <Image
              src={props.imgSource}
              alt={props.imgAlt}
              width={547}
              height={547}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className="img__container"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <Image
              src={props.imgSource}
              alt={props.imgAlt}
              width={547}
              height={547}
            />
          </div>
          <Content {...props} />
        </>
      )}
    </div>
  );
};

export default Item;
