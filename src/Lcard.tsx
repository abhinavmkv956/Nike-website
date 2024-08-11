import React, { FC, useRef } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface LcardProps {}

const card2Data = [
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg",
    title: "Member Product",
    text: "Your Exclusive Access",
    button: "Shop"
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/100ca749-1a94-4f98-bc43-a58e7e9cdbcf/nike-just-do-it.png",
    title: "Nike By You",
    text: "Your Customisation Service",
    button: "Customise"
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/39412611-0af5-4770-8c2e-ef5c23bc6a3d/nike-just-do-it.jpg",
    title: "Nike By You",
    text: "Women's Road Racing Shoes",
    button: "Customise"
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_390,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    button: "Shop"
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_375,c_limit/37b262a3-c8c7-49e8-a29f-8d46bc8ab950/nike-just-do-it.jpg",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    button: "Shop"
  }
];

const Lcard: FC<LcardProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Container className='mt-5 mb-5 pt-5'>
      <Row className='mb-3'>
        <Col xs={10}>
          <h4>Featured</h4>
        </Col>
        <Col xs={2} className='d-flex justify-content-end'>
          <button
            type="button"
            className="btn btn-secondary btn-lg rounded-circle me-2"
            onClick={() => scroll('left')}
          >
            <IoChevronBackOutline />
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg rounded-circle"
            onClick={() => scroll('right')}
          >
            <IoChevronForwardOutline />
          </button>
        </Col>
      </Row>
      <div
        ref={scrollRef}
        className='d-flex gap-3 flex-nowrap overflow-auto'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {card2Data.map((card, index) => (
          <Card key={index} className='border-0' style={{ flex: '0 0 70%', maxWidth: '30rem' }}>
            <Card.Img variant="top" src={card.src} />
            <Card.ImgOverlay className='d-flex align-items-end p-3'>
              <div className='text-light'>
                <Card.Text className='fw-bold'>{card.title}</Card.Text>
                <Card.Text>
                  <h5>{card.text}</h5>
                  <Button className='rounded-pill mt-2' variant="light">{card.button}</Button>
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Lcard;
