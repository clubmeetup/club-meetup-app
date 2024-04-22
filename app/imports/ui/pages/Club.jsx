import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ExternalLinkIcon } from 'react-bootstrap-icons'; // Import the icon for external links
import { PageIDs } from '../utilities/ids';

const ClubPage = () => (
  <Container id={PageIDs.clubPage}>
    <Row xs={1} md={2} lg={4} className="g-4">
      {/* Add Card components for each club */}
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>Club Name</Card.Title>
            <Card.Text>Description of the club</Card.Text>
            {/* You can include club-specific information here */}
            <a href="https://clubmeetup.github.io/clublist/" target="_blank" rel="noopener noreferrer">
              Visit Club Page <ExternalLinkIcon size={20} />
            </a>
          </Card.Body>
        </Card>
      </Col>
      {/* Add more cards for other clubs if needed */}
    </Row>
  </Container>
);

export default ClubPage;
