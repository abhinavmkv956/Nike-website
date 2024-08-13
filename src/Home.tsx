import React, { FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Container } from 'react-bootstrap';

interface HomeProps {

}

const Home: FC<HomeProps> = ({ }) => {
    return (
        <>

        <Container >
                <Row >
                    
                    <Col xs={12} md={12} > <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1342,c_limit/b29b4905-2da2-48b3-bda8-9eb33333795c/nike-just-do-it.png" alt="frfghj"
                       
                       className='img-fluid'
                    /></Col>
                    
                </Row>

                <div className='mt-5 mb-5' >
                    <h5 className='text-center fw-bold'>Nike Elctric Pack</h5>
                    <h1 className='text-center '>WIN ON AIR</h1>
                    <h6 className='text-center '>Engineering for those who stand out</h6>

                    <div className='justify-content-center d-flex gap-1 mt-4'>
                    <Button className='rounded-pill fw-semibold '  variant="dark">Experience Air</Button>
                    <Button className='rounded-pill fw-semibold' variant="dark">Shop Air</Button>
                    </div>
                    
                </div>

       </Container>
              
        

        </>
    );
};

export default Home;