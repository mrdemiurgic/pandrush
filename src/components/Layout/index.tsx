import React from 'react';

import '@fontsource/oswald';
import '@fontsource/oswald/300.css';
import '@fontsource/montserrat';
import '@fontsource/montserrat/900.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/500.css';

import '@fontsource/montserrat/600.css';

import colors from '../../content/colors.json';

interface Props {
  children: React.ReactNode;
}

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
    font-size: 18px;
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
