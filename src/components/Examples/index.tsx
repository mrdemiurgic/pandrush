import React, { useState, useRef, useLayoutEffect } from 'react';

import Video from './Video';
import { Container } from './styles';

interface Props {
  /**
   * children of Examples
   */
  children: React.ReactNode;
}

const Examples = ({ children }: Props) => {
  const [selectedId, setSelectedId] = useState<string>('');

  const [width, setWidth] = useState<number>(500);
  const examplesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resizeHandler = () => {
      if (examplesRef.current !== null) {
        const { width: newWidth } = examplesRef.current.getBoundingClientRect();
        setWidth(newWidth);
      }
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <Container ref={examplesRef}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as JSX.Element, {
          selectedId,
          select: setSelectedId,
          width,
        }),
      )}
    </Container>
  );
};

Examples.Video = Video;
export default Examples;
