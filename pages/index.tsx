//importing types & utils
import { seoConfig } from '../utils';
import { NextPage } from 'next';
//importing components
import Advantages from '../components/Advantages';
import DashBoard from '../components/Dashboard';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import MainLayout from '../layouts/MainLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <SEO {...seoConfig} />
      <div className="wrapper">
        <Hero />
        <DashBoard />
        <Advantages />
        <Testimonials />
      </div>
    </MainLayout>
  );
};

export default HomePage;
