import React from 'react';

import colors from '../../styles/colors';

import { createGlobalStyle } from 'styled-components';

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
  });
}

interface Props {
  children: React.ReactNode;
}

const GlobalStyle = createGlobalStyle`
  html, body, div, span, a, h1, h2, h3, h4, h5, h6, p, blockquote, img, 
  ol, ul, li, input, label, select, table, tbody, tfoot, thead, tr, th, 
  td, footer, header, menu, nav, section, video {
    margin: 0; 
    padding: 0; 
    list-style: none; 
    border: 0;
  }

  html, body, #___gatsby, #gatsby-focus-wrapper {
    /* height: 100%; */
    width: 100%;
    background: ${colors.richBlack};
    color: ${colors.babyPowder};
  }
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Layout;
