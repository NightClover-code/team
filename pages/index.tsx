//importing components
import { NextPage } from 'next';
import Hero from '../components/Hero';

const HomePage: NextPage = () => {
  return (
    <div className="app__container">
      <div className="wrapper">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
