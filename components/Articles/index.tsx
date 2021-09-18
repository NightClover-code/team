import Article from './Article';

const Blog = () => {
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
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default Blog;
