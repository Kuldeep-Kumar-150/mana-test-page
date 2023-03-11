import React from 'react'
import inMan from '../image/svg/Inman.svg'
import deal from '../image/svg/deal.svg'
import cnbc from '../image/svg/cnbc.svg'
import stylish from '../image/svg/stylish.svg'
import fortune from '../image/svg/fortune.svg'
import geekWire from '../image/svg/greekwire.svg'
import { Col, Container, Row } from 'react-bootstrap'

const AsFeatured = () => {
    return (
        <>
            <section className='bg-white py-5'>
                <Container className='pb-5'>
                    <h4 className='fs_49 fw-bold ff_roman clr_darkgreen mb-0 text-center'>As featured in:</h4>
                    <Row className='mt-5 justify-content-center'>
                        <Col sm={6} md={4}lg={3} xl={2} className='d-flex justify-content-center'>
                            <img src={inMan} alt="companyname" />
                        </Col>
                        <Col sm={6} md={4}lg={3} xl={2} className='d-flex justify-content-center mt-3 mt-sm-0'>
                            <img src={deal} alt="companyname" />
                        </Col>
                        <Col sm={6} md={4}lg={3} xl={2} className='d-flex justify-content-center mt-3'>
                            <img src={cnbc} alt="companyname" />
                        </Col>
                        <Col sm={6} md={4}lg={3} xl={2} className='d-flex justify-content-center mt-3'>
                            <img src={stylish} alt="companyname" />
                        </Col>
                        <Col sm={6} md={4}lg={3} xl={2} className='d-flex justify-content-center mt-3'>
                            <img src={fortune} alt="companyname" />
                        </Col>
                        <Col sm={6} md={4}lg={3} xl={2} className='d-flex justify-content-center mt-3'>
                            <img src={geekWire} alt="companyname" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AsFeatured