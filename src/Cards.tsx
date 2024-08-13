import React, { FC, useRef } from 'react';
import { Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

interface CardsProps {}

const cardData = [
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/467c9f92-2ced-40d1-b663-06b9089c1436/vaporfly-3-electric-road-racing-shoes-CvfhbR.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ae14a560-14f7-4dfc-be44-023a518c77c1/invincible-3-electric-road-running-shoes-nhn3wf.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/fbe575e0-b8c7-45ea-8a71-fa20ae683c06/infinityrn-4-electric-road-running-shoes-FkGQcG.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/49545dac-67b5-4c49-b82f-83dcd07b375a/pegasus-41-electric-road-running-shoes-CNd0pW.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/787e02fe-fb5b-4854-9919-84034a870643/pegasus-41-electric-road-running-shoes-cPn8fn.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/ddceaccc-4f2e-4cbd-84fc-b9053cb26c3f/icon-woven-basketball-jacket-8CZGX4.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/b10b5561-ff15-48a2-8fcb-e24daccc73a0/ultrafly-trail-racing-shoes-4DRfrN.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  },
  {
    src: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_466,c_limit/882c21ec-b405-4e45-92d3-111a108e0cf0/sabrina-2-ep-basketball-shoes-w6qwqM.png",
    title: "Nike Vaporfly 3 Electric",
    text: "Women's Road Racing Shoes",
    price: "₹21,395.00"
  }
];

const Cards: FC<CardsProps> = ({}) => {
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
          <Col xs={7} sm={9}><h4>Popular Right Now</h4></Col>
          <Col xs={5} sm={3} className='d-flex justify-content-end gap-2'>
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
          style={{ scrollbarWidth: 'none' }}
          className='d-flex gap-3 flex-nowrap overflow-x-scroll'
        >
          {cardData.map((card, index) => (
            <Card key={index} className='border-0   ' style={{ flex: '0 0 70%', maxWidth: '30rem'}}>
              <Card.Img style={{borderRadius:'0'}} variant="top" src={card.src} />
              <Card.Body className='ps-0 pt-3'>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.text}<br />
                  <b >MRP: {card.price}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Cards;
