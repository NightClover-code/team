//importing components
import { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomePage: NextPage = () => {
  return (
    <div className="app__container">
      <div className="wrapper">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
