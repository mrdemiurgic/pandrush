import React from 'react';

// @ts-ignore
import Loadable from '@loadable/component';
import { BrowserView } from 'react-device-detect';
// import Home from '../sections/Home';
import About from '../sections/About';
import Contact from '../sections/Contact';
import RecentWork from '../sections/RecentWork';
import Book from '../sections/Book';
import Layout from '../components/Layout';
import FixedNav from '../components/FixedNav';
import Footer from '../components/Footer';

const Home = Loadable(() => import('../sections/Home'));

const Index = () => {
  return (
    <Layout>
      <BrowserView>
        <FixedNav />
      </BrowserView>
      <Home />
      <About />
      <RecentWork />
      <Book />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Index;
