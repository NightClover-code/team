//importing utils & types
import { seoConfig } from '../utils';
import { NextPage } from 'next';
//importing components
import Advantages from '../components/Advantages';
import DashBoard from '../components/Dashboard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO {...seoConfig} />
      <div className="wrapper">
        <Header />
        <Hero />
        <DashBoard />
        <Advantages />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
