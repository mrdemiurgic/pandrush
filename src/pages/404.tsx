import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';

import colors from '../content/colors.json';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.div`
  font-family: Oswald;
  font-size: 5em;
`;

const StyledLink = styled(Link)`
  background: ${colors.babyBlue};
  color: ${colors.richBlack};
  font-family: Montserrat;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Title>404 Not Found</Title>
        <StyledLink to="/">Visit Site</StyledLink>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
