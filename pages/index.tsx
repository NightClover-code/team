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
import NavBar from '../components/Header/NavBar';

const HomePage: NextPage = () => {
  return (
    <MainLayout NavBar={NavBar}>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero />
        <DashBoard />
        <Advantages />
        <Testimonials />
      </main>
    </MainLayout>
  );
};

export default HomePage;
