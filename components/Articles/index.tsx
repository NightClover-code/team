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
      <div className="blog__header" data-aos="fade-up">
        <h1>Blog</h1>
        <p>
          Our latest web design tricks, insights, and resources, hot of the
          presses.
        </p>
      </div>
      <div className="blog__grid" data-aos="fade-up" data-aos-delay="400">
        {articles.map(article => {
          return <Article article={article} key={uuidv4()} />;
        })}
      </div>
      <div className="custom__button" data-aos="fade-up">
        <button>
          Next
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
};

export default Blog;
