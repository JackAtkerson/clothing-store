import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundVideo from '../videos/videote.mp4';
import logoPhoto from '../logo.png';
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';
//import Videot from  "../"


function HomeStrap(props) {

    return (
        <Jumbotron style={{backgroundColor:'transparent'}} fluid>
            <video autoPlay loop muted id='video'>
                <source src={backgroundVideo} type='video/mp4' />
            </video>
            <Container>

                

                <Row>
                    <Col className='text-center'>
                        <Image src={logoPhoto} alt="shirt" className='logo' fluid />
                        <h1 className='mt-4 home'>Welcome to Music City Sports!</h1>
                        <h2 className='home'> A local home to all of your favorite brands</h2>
                        <Button className='mt-4' variant='secondary' href='/menu' size='lg'>
                            Order Now
                        </Button>
                    </Col>
                </Row>

            </Container>
        </Jumbotron>

    )
}

export default HomeStrap;