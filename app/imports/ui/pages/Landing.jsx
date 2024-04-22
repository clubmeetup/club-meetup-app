import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
import { PageIDs } from '../utilities/ids';

const customCaptionStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: adds a semi-transparent background to the text for better visibility
  color: 'white',
  padding: '10px',
  borderTopLeftRadius: '5px', // Optional: rounds the top-left corner for aesthetic purposes
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
        {/* Link to the Club List */}
        <a href="https://clubmeetup.github.io/clublist/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Clubs At Manoa
        </a>
        <Carousel>
          <Carousel.Item>
            <Image src="images/club.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption style={{ ...customCaptionStyle, top: '0', left: '0', right: 'auto', bottom: 'auto' }}>
              <h4> Club Info</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club2.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption style={{ ...customCaptionStyle, top: '0', left: '0', right: 'auto', bottom: 'auto' }}>
              <h4>Sailing Club</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club3.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption style={{ ...customCaptionStyle, top: '0', left: '0', right: 'auto', bottom: 'auto' }}>
              <h4>Judo Club</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club4.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption style={{ ...customCaptionStyle, top: '0', left: '0', right: 'auto', bottom: 'auto' }}>
              <h4>Pre-Veterinary Club</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club5.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption style={{ ...customCaptionStyle, top: '0', left: '0', right: 'auto', bottom: 'auto' }}>
              <h4>Student Organic Club </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  </div>
);

export default Landing;
