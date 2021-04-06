import React, { useLayoutEffect, useRef } from 'react';

import Home from '../sections/Home';
import About from '../sections/About';
import RecentWork from '../sections/RecentWork';
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
          const showNav = scrollY >= windowHeight.current - 80;
          fixedNavRef.current.style.transform = `translateY(${
            showNav ? 80 : 0
          }px)`;
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
      <RecentWork />
      <About />
    </Layout>
  );
};

export default Index;
