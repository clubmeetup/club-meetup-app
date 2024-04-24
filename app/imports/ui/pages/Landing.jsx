import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap'; // Import Button from react-bootstrap
import { PageIDs } from '../utilities/ids';

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
          <Carousel.Item>
            <Image src="images/club.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption className="carousel-caption-custom">
              <h4>Club Info</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club2.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption className="carousel-caption-custom">
              <h4>Sailing Club</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club3.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption className="carousel-caption-custom">
              <h4>Judo Club</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club4.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption className="carousel-caption-custom">
              <h4>Pre-Veterinary Club</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club5.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption className="carousel-caption-custom">
              <h4>Student Organic Club</h4>
            </Carousel.Caption>
          </Carousel.Item>{/* Carousel items */}
        </Carousel>
      </Container>
    </div>
    <Container className="text-center mt-4">
      <p style={{ fontSize: '40pt', color: 'black' }}>
        Welcome to our vibrant U.H community! Sign up now!
      </p>
    </Container>
  </div>
);

export default Landing;
