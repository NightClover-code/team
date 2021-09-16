//importing components
import LearnMore from './LearnMore';

interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <div className="content" data-aos="fade-up">
      <h1>{title}</h1>
      <p>{description}</p>
      <LearnMore />
    </div>
  );
};

export default Content;
