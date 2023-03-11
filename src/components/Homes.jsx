import React from 'react'
import beautifullhous from '../image/png/beautifullhouse.png'
import { Row, Col, Container } from 'react-bootstrap'

const Homes = () => {
    return (
        <>
            <section className='overflow-hidden bg-white py-5'>
                <Container>
                    <div className="text-center">
                        <h3 className='fs_49 fw-bold ff_roman'>Featured homes</h3>
                        <p className='fs_lg fw-light ff_opensans'>Browse our curated selection of wow-worthy listings – homes in the most desirable locations.</p>
                    </div>
                </Container>
                <Row className='align-items-center mt-5'>
                    <Col sm={12} lg={6}>
                        <img className='w-100' src={beautifullhous} alt="beautifullhouse" />
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className='ps-sm-5 px-3 mt-5 mt-lg-0'>
                            <p className='fs_lg fw-light ff_opensans clr_lightdark'>CORONA DEL MAR, CA</p>
                            <p className='fs_2xl fw-bold ff_roman clr_lightdark'>Ocean Boulevard</p>
                            <p className='fs_lg fw-light ff_opensans clr_lightdark'>$ 1,263,000 . 1/8 OWNERSHIP</p>
                            <div className="d-flex align-items-center">
                                <p className='fs_lg fw-light ff_opensans mb-0 clr_lightdark'>4 Beds  </p>
                                <div className="horizontal-line"></div>
                                <p className='fs_lg fw-light ff_opensans mb-0 clr_lightdark'>4.5 Baths  </p>
                                <div className="horizontal-line"></div>
                                <p className='fs_lg fw-light ff_opensans mb-0 clr_lightdark'>3,143 sq ft</p>
                            </div>
                            <p className='fs_lg fw-light ff_opensans mb-0 clr_lightdark mt-3'>Phasellus condimentum purus nec lacus finibus egestas. <br /> Donec a ipsum massa. Pellentesque convallis
                                id erat ut tempor. Integer interdum purus orci, non luctus velit pulvinar quis</p>
                            <div className="mt-4">
                                <a href="#" className='fs_lg fw-semibold ff_opensans clr_lightdark get_started_btn position-relative'>DETAILS</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Homes