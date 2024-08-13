import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineGlobal } from "react-icons/ai";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <Container className='border-top mt-5 pt-5'>
            <Row>
                <Col xs={12} md={4} lg={3}>
                    <h6 className='mt-3'><b>Resources</b></h6>
                    <ul className='list-unstyled'>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Find A Store</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Become A Member</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Send Us Feedback</h6></a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <h6 className='mt-3'><b>Help</b></h6>
                    <ul className='list-unstyled'>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Get Help</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Order Status</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Delivery</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Returns</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Payment Options</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Contact Us On Nike.com Inquiries</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Contact Us On All Other Inquiries</h6></a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <h6 className='mt-3'><b>Company</b></h6>
                    <ul className='list-unstyled'>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>About Nike</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>News</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Careers</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Investors</h6></a></li>
                        <li><a href="#" className="text-dark text-decoration-none"><h6>Sustainability</h6></a></li>
                    </ul>
                </Col>
                <Col xs={12} md={6} lg={3} className='d-flex mt-3 mt-lg-0'>
                    <h6><AiOutlineGlobal /> India</h6>
                </Col>
            </Row>
            <Row>
                <Col className=' mt-5'>
                    <p>&copy; 2024 Nike, Inc. All rights reserved | Guides | Terms of Sale | Terms of Use | Nike Privacy Policy</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;
