//importing hooks
import { useState } from 'react';
//importing types & utils
import { ArticleInterface } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';
//importing components
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import Article from './Article';
import Link from 'next/link';

export interface ArticleProps {
  articles: ArticleInterface[];
}

const Blog: React.FC<ArticleProps> = ({ articles }) => {
  const pageSize = 3;
  const [pageNum, setPageNum] = useState(1);

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
      <div className="btns">
        <div
          className="custom__button previous__button"
          data-aos="fade-up"
          style={{ display: pageNum === 1 ? 'none' : 'block' }}
          onClick={() => (pageNum > 1 ? setPageNum(pageNum - 1) : null)}
        >
          <Link href={`/blog/?page=${pageNum - 1}`} passHref>
            <button>
              <ChevronLeftIcon />
              Previous
            </button>
          </Link>
        </div>
        <div
          className="custom__button next__button"
          data-aos="fade-up"
          style={{ display: pageNum === pageSize ? 'none' : 'block' }}
          onClick={() => (pageNum < pageSize ? setPageNum(pageNum + 1) : null)}
        >
          <Link href={`/blog/?page=${pageNum + 1}`} passHref>
            <button>
              Next
              <ChevronRightIcon />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
