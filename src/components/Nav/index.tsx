import React from 'react';

import navItems from '../../content/nav.json';
const numItems = navItems.length;

import { Container, Item } from './styles';

export interface Props {
  /**
   * Include a link for going back to top of page on index
   */
  includeHome: boolean;
}

const Nav = ({ includeHome = false }: Props) => {
  return (
    <Container>
      {includeHome && <Item to={'/#home'}>Back to Top</Item>}
      {navItems.map((nav) => (
        <Item key={nav.label} to={nav.link}>
          {nav.label}
        </Item>
      ))}
    </Container>
  );
};

export default Nav;
