import Image from 'next/image';
import { isEven } from '../../../utils';
import Content from '../../Content';

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
          <Image
            src={props.imgSource}
            alt={props.imgAlt}
            width={547}
            height={547}
          />
        </>
      ) : (
        <>
          <Image
            src={props.imgSource}
            alt={props.imgAlt}
            width={547}
            height={547}
          />
          <Content {...props} />
        </>
      )}
    </div>
  );
};

export default Item;
