//importing components
import LearnMore from './LearnMore';

interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <p>{description}</p>
      <LearnMore />
    </div>
  );
};

export default Content;
