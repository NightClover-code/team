//importing components
import { NextPage } from 'next';
import Advantages from '../components/Advantages';
import DashBoard from '../components/Dashboard';
import Header from '../components/Header';
import Hero from '../components/Hero';

const HomePage: NextPage = () => {
  return (
    <div className="app__container">
      <div className="wrapper">
        <Header />
        <Hero />
        <DashBoard />
        <Advantages />
      </div>
    </div>
  );
};

export default HomePage;
