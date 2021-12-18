//importing types & utils
import { client, seoConfig } from '../utils';
import { GetStaticProps, NextPage } from 'next';
import { HeroInterface } from '../interfaces';
import { heroesQuery } from '../graphql';
//importing components
import Advantages from '../components/Advantages';
import DashBoard from '../components/Dashboard';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import MainLayout from '../layouts/MainLayout';
import NavBar from '../components/Header/NavBar';

interface HomePageProps {
  hero: HeroInterface;
}

const HomePage: NextPage<HomePageProps> = ({ hero }) => {
  return (
    <MainLayout NavBar={NavBar}>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero hero={hero} />
        <DashBoard />
        <Advantages />
        <Testimonials />
      </main>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: heroesQuery,
  });

  const hero = data.heroes.map((hero: any) => hero)[0];

  return {
    props: {
      hero,
    },
  };
};

export default HomePage;
