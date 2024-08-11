import React, { FC } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col>
          <h4>Don't Miss</h4>
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={12} md={6} className="p-0">
          <img
            className="img-fluid w-100"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/d9e32816-c3ae-4ec0-b324-2c3ad093d9fe/image.jpg"
            alt="First Image"
          />
        </Col>
        <Col xs={12} md={6} className="p-0">
          <img
            className="img-fluid w-100"
            src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/866127b4-02d6-4d1c-b7d6-4befb338c018/image.png"
            alt="Second Image"
            
          />
        </Col>
      </Row>

      <div className="text-center mt-5 mb-5">
        <h5 className="fw-bold">'Sol'</h5>
        <h1 className="fw-bolder">AIR JORDAN 39</h1>
        <h6>
          Not just another shoe. It's the Air Jordan 39. HIS 39. Crafted to honor MJ's domination of the game.
        </h6>
        <div className="d-flex justify-content-center gap-2 mt-4">
          <Button className="rounded-pill" variant="dark">
            Shop
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Video;
