import Image from 'next/image';
import Content from '../../Content';

export interface ItemProps {
  title: string;
  description: string;
  imgSource: string;
  imgAlt: string;
}

const Item: React.FC<ItemProps> = props => {
  return (
    <div className="advantages__item">
      <Content {...props} />
      <Image
        src={props.imgSource}
        alt={props.imgAlt}
        width={547}
        height={547}
      />
    </div>
  );
};

export default Item;
