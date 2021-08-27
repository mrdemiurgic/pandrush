import React, { useRef, useLayoutEffect } from 'react';
import Nav from '../Nav';

import { clamp, linearInterpolate, Params } from '../../utils/layout';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

import * as S from './styles';

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
          const newY = clamp(
            scrollY - windowHeight.current + spacing.xxl,
            0,
            spacing.xl,
          );
          const newOpacity = linearInterpolate(newY, {
            inputRange: [0, spacing.xl],
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
    <S.Container ref={fixedNavRef}>
      <S.InnerContainer>
        <div>Logo</div>
        <S.NavContainer>
          <Nav
            includeHome={true}
            textColor={colors.richBlack}
            separatorColor={colors.babyPowder}
            textHoverColor={colors.babyPowder}
          />
        </S.NavContainer>
        <S.HamburgerIcon icon={faBars} />
      </S.InnerContainer>
    </S.Container>
  );
};

export default FixedNav;
