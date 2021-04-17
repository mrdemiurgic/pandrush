import React from 'react';

import Home from '../sections/Home';
import About from '../sections/About';
import Contact from '../sections/Contact';
import RecentWork from '../sections/RecentWork';
import Pricing from '../sections/Pricing';
import Layout from '../components/Layout';
import FixedNav from '../components/FixedNav';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <Layout>
      <FixedNav />
      <Home />
      <About />
      <RecentWork />
      <Pricing />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Index;
