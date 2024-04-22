import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { ExternalLinkIcon } from 'react-bootstrap-icons'; // Import the icon for external links
import { PageIDs } from '../utilities/ids';

const ClubPage = () => (
  <Container id={PageIDs.clubPage}>
    <h1>Welcome to our Club Page!</h1>
    <p>Explore our clubs and find what interests you.</p>
    {/* Button to link to the club list website */}
    <Button variant="primary" href="https://clubmeetup.github.io/clublist/" target="_blank" rel="noopener noreferrer">
      Explore Clubs <ExternalLinkIcon size={20} />
    </Button>
  </Container>
);

export default ClubPage;
