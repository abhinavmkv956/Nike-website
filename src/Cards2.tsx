import React, { FC, useRef } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

interface Card2Props {}

const card2Data = [
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_791,c_limit/a2d0c41f-53fc-4968-ab5d-8610c362775c/image.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/d9e32816-c3ae-4ec0-b324-2c3ad093d9fe/image.jpg",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/bb20b31c-aa11-47f5-937c-c8d3ba6ab1ba/image.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
  },
  {
    src: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_377,c_limit/866127b4-02d6-4d1c-b7d6-4befb338c018/image.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
  }
];

const Card2: FC<Card2Props> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Container className='mt-5 pt-5'>
        <Row className='mb-3 align-items-center'>
          <Col xs={6} sm={9} md={10}>
            <h4>Featured</h4>
          </Col>
          <Col xs={6} sm={3} md={2} className='d-flex justify-content-end gap-2'>
          <button
              type="button"
              className="btn btn-secondary rounded-circle  d-flex align-items-center justify-content-center"
              style={{ width: '3rem', height: '3rem' }}
              onClick={() => scroll('left')}
            >
              <IoChevronBackOutline size="1.5rem" />
            </button>
            <button
              type="button"
              className="btn btn-secondary rounded-circle  d-flex align-items-center justify-content-center"
              style={{ width: '3rem', height: '3rem' }}
              onClick={() => scroll('right')}
            >
              <IoChevronForwardOutline size="1.5rem" />
            </button>
          </Col>
        </Row>
        <div
          ref={scrollRef}
          className='d-flex gap-3 flex-nowrap overflow-auto'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {card2Data.map((card, index) => (
            <Card key={index} className='border-0' style={{flex: '0 0 70%', maxWidth: '30rem' }}>
              <Card.Img style={{borderRadius:'0'}} variant="top" src={card.src} />
              <Card.Body  className='ps-0 pt-5'>
                <Card.Text className='pb-0'>{card.title}</Card.Text>
                <Card.Text >
                  <h5 >{card.text}</h5><br />
                  <b><a className="text-decoration-none text-dark" href="#">Shop</a></b>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>

     
    </>
  );
};

export default Card2;
