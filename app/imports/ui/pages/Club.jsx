import React from 'react';
import { Container } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const ClubPage = () => (
  <Container id={PageIDs.clubPage}>
    <h1>Welcome to our Club Page!</h1>
    <p>Explore our clubs and find what interests you.</p>
    {/* Button to link to the club list website */}
    <a style={{ color: 'black' }} href="https://clubmeetup.github.io/clublist/">Club Directory/</a>
  </Container>
);

export default ClubPage;
