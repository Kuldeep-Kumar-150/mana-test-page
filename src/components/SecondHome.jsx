import React from 'react'
import shopIcon from '../image/svg/shopicon.svg'
import owmImage from '../image/svg/own.svg'
import enjoy from '../image/svg/enjoy.svg'
import { Col, Container, Row } from 'react-bootstrap'

const SecondHome = () => {
    return (
        <>
            <section className='py-5' id='down-arrow'>
                <Container className='py-5'>
                    <div className="text-center">
                        <h3 className='fs_49 fw-bold ff_roman'>Find your second home with Mana</h3>
                        <p className='fs_lg fw-light ff_opensans'>We make it simple</p>
                    </div>
                    <Row className='mt-5 pt-5'>
                        <Col md={6} xl={4}>
                            <div>
                                <div className="d-flex align-items-center">
                                    <img src={shopIcon} alt="shop-icon" />
                                    <p className='fs_xxl fw-bold ff_roman mb-0 ps-2'>Shop</p>
                                </div>
                                <p className='p-3 fs_xl fw-light ff_opensans ps-3 ms-4'>Explore our collection of stunning single-family homes
                                    in top second home destinations. We'll help you find the
                                    perfect fit, and you decide how many shares you'd like to own.</p>
                            </div>
                        </Col>
                        <Col md={6} xl={4}>
                            <div>
                                <div className="d-flex align-items-center">
                                    <img src={owmImage} alt="shop-icon" />
                                    <p className='fs_xxl fw-bold ff_roman mb-0 ps-2'>Own</p>
                                </div>
                                <p className='p-3 fs_xl fw-light ff_opensans ps-3 ms-4'>We create a property LLC for each home, find and vet co-owners,
                                    and handle all the sales details. At closing, the co-owners enjoy
                                    100% ownership of the home – Pacaso does not retain any shares</p>
                            </div>
                        </Col>
                        <Col md={6} xl={4}>
                            <div>
                                <div className="d-flex align-items-center">
                                    <img src={enjoy} alt="shop-icon" />
                                    <p className='fs_xxl fw-bold ff_roman mb-0 ps-2'>Enjoy</p>
                                </div>
                                <p className='p-3 fs_xl fw-light ff_opensans ps-4 ms-4'>We take care of furnishings, repairs, utilities and property
                                    management – you just show up and relax. Scheduling is easy
                                    and equitable with our app and SmartStay™ technology.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <a href="#" className='fs_lg fw-semibold ff_opensans text-dark get_started_btn position-relative'>GET STARTED</a>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SecondHome