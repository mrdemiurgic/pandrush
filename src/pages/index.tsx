import React, { useEffect, useState } from 'react';

import Home from '../sections/Home';
import About from '../sections/About';
import RecentWork from '../sections/RecentWork';
import Layout from '../components/Layout';
import FixedNav from '../components/FixedNav';

const Index = () => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  useEffect(() => {
    const scrollHandler = (e: Event) => {
      window.requestAnimationFrame(() => {
        if (window.scrollY > window.innerHeight) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }
      });
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Layout>
      <FixedNav show={showNavBar} />
      <Home />
      <RecentWork />
      <About />
    </Layout>
  );
};

export default Index;
