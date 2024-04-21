import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const customCaptionStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '10px',
  borderTopLeftRadius: '5px',
};

const Landing = () => (
  <div id={PageIDs.landingPage}>
    <div className="landing-green-background">
      <Container className="text-center">
        <h1 style={{ paddingTop: '20px', color: 'antiquewhite', fontSize: '36pt' }}>
          Explore
        </h1>
        <h3 style={{ paddingBottom: '20px', color: 'antiquewhite' }}>
          Clubs at U.H Manoa that are eager for you to join
        </h3>
        <Carousel>
          {/* ... your carousel items */}
          <Carousel.Item>
            <Image src="images/club.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption style={customCaptionStyle}>
              <h4> Club Info</h4>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Repeat for other items, removing the explicit top, left, right, bottom properties since they are already defined in customCaptionStyle */}
          {/* ... */}
        </Carousel>
      </Container>
    </div>
  </div> // Added this closing tag
);

export default Landing;
