//importing types & utils
import { ArticleDetail } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
//importing components
import { ChevronRightIcon } from '../Icons';
import Article from './Article';

export interface ArticleProps {
  articles: ArticleDetail[];
}

const Blog: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <section className="blog__section">
      <div className="blog__header">
        <h1>Blog</h1>
        <p>
          Our latest web design tricks, insights, and resources, hot of the
          presses.
        </p>
      </div>
      <div className="blog__grid">
        {articles.map(article => (
          <Article key={uuidv4()} article={article} />
        ))}
      </div>
      <div className="custom__button">
        <button>
          Next
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Blog;
