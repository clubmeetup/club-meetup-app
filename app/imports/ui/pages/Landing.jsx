import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div id={PageIDs.landingPage}>
    <div className="landing-green-background">
      <Container className="text-center">
        <h1 style={{ paddingTop: '20px', color: 'black', fontSize: '36pt' }}>
          Explore
        </h1>
        <h3 style={{ paddingBottom: '20px', color: 'black' }}>
          Clubs at U.H Manoa that are eager for you to join
          <Image src="/images/profiles-page.png" width={500} />
        </h3>
      </Container>
    </div>
  </div>
);

export default Landing;
