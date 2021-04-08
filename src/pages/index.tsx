import React, { useLayoutEffect, useRef } from 'react';

import Home from '../sections/Home';
import About from '../sections/About';
import Contact from '../sections/Contact';
import RecentWork from '../sections/RecentWork';
import Pricing from '../sections/Pricing';
import Layout from '../components/Layout';
import FixedNav from '../components/FixedNav';

const clamp = (num: number, min: number, max: number) =>
  Math.min(max, Math.max(min, num));

const Index = () => {
  const windowHeight = useRef<number>();
  const fixedNavRef = useRef<HTMLDivElement>(null);

  console.log('home is rendering!!!');

  useLayoutEffect(() => {
    windowHeight.current = window.innerHeight;
    const resizeHandler = () => {
      windowHeight.current = window.innerHeight;
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useLayoutEffect(() => {
    const scrollHandler = (e: Event) => {
      let raf: number | undefined;

      if (raf !== undefined) {
        window.cancelAnimationFrame(raf);
      }

      raf = window.requestAnimationFrame(() => {
        if (
          windowHeight.current !== undefined &&
          fixedNavRef.current !== null
        ) {
          const scrollY = window.scrollY;
          const newY = clamp(scrollY - windowHeight.current + 160, 0, 80);
          fixedNavRef.current.style.transform = `translateY(${newY}px)`;
        }
      });
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Layout>
      <FixedNav navRef={fixedNavRef} />
      <Home />
      <About />
      <RecentWork />
      <Pricing />
      <Contact />
    </Layout>
  );
};

export default Index;
