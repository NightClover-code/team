import Content from '../../Content';

interface ItemProps {
  title: string;
  description: string;
}

const Item: React.FC<ItemProps> = props => {
  return (
    <div className="advantages__item">
      <Content {...props} />
    </div>
  );
};

export default Item;
