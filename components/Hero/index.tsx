const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__content">
          <h1>Instant collaboration for remote teams</h1>
          <p>
            The easiest and fastest way to share work with groups and to
            simplify project management.
          </p>
          <form className="newsletter__form">
            <input type="email" placeholder="Email" />
            <button className="primary__button">Get Early Access</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
