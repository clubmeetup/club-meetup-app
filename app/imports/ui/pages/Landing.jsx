import React from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
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
        {/* Carousel starts here */}
        <Carousel>
          <Carousel.Item>
            <Image src="images/club.jpg" width={800} className="mx-auto d-block custom-padding" />
            <Carousel.Caption>
              <h3 style={{ paddingBottom: '200px', color: '#024731' }}>
                Clubs at U.H Manoa that are eager for you to join
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club2.jpg" width={800} className="mx-auto d-block custom-padding" />
            <Carousel.Caption>
              <h3>Sailing Club</h3>
              <p>Face the ocean in this thrilling and fun club</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="images/club3.jpg" width={600} className="mx-auto d-block custom-padding" />
            <Carousel.Caption>
              <h3 style={{ paddingBottom: '200px', color: '#024731' }}>
                Clubs at U.H Manoa that are eager for you to join
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Item blocks for additional slides */}
        </Carousel>
        {/* Carousel ends here */}
      </Container>
    </div>
  </div>
);

export default Landing;
