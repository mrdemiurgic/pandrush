import React, { useRef, useLayoutEffect } from 'react';
import Nav from '../Nav';

import { clamp, linearInterpolate, Params } from '../../utils/layout';

import colors from '../../content/colors.json';

import { Container } from './styles';

const FixedNav = () => {
  const windowHeight = useRef<number>();
  const fixedNavRef = useRef<HTMLDivElement>(null);

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
          const newOpacity = linearInterpolate(newY, {
            inputRange: [0, 80],
            outputRange: [0, 1],
          } as Params);
          fixedNavRef.current.style.transform = `translateY(${newY}px)`;
          fixedNavRef.current.style.opacity = newOpacity.toString();
        }
      });
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <Container ref={fixedNavRef}>
      <Nav
        includeHome={true}
        textColor={colors.richBlack}
        separatorColor={colors.babyPowder}
        textHoverColor={colors.babyPowder}
      />
    </Container>
  );
};

export default FixedNav;
