import React from 'react'
import johnDoe1 from '../image/svg/johnDeo1.svg'
import johnDoe2 from '../image/svg/johnDeo2.svg'
import johnDoe3 from '../image/svg/johnDeo3.svg'
import leaf2 from '../image/svg/fourleaf.svg'
import { Col, Container, Row } from 'react-bootstrap'

const Slider = () => {
    return (
        <>
            <section className='bg-white py-5 position-relative'>
                <Container className='py-5'>
                    <h5 className='fs_49 fw-bold ff_roman clr_darkgreen mb-0 text-center'>Owner perspectives</h5>
                    <Row className='pt-5 justify-content-center'>
                        <Col sm={12} md={6} lg={4}>
                            <div className='p-3 border_grey'>
                                <div className="d-flex align-items-center">
                                    <img src={johnDoe1} alt="image" />
                                    <div className='ms-3'>
                                        <p className='fs_lg fw-semibold ff_opensans mb-0 clr_darkgreen'>John Doe</p>
                                        <p className='fs_md fw-light ff_opensans mb-0 clr_darkgreen'>Mauris pretium,USA </p>
                                    </div>
                                </div>
                                <p className='fs_md wf-light ff_opensans clr_darkgreen pt-3'>“Integer odio est, efficitur nec nibh quis, euismod ultricies diam.
                                    Quisque accumsan libero vitae massa consequat consequat. Sed eu tincidunt lacus, in” </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='p-3 border_grey mt-4 mt-md-0'>
                                <div className="d-flex align-items-center">
                                    <img src={johnDoe2} alt="image" />
                                    <div className='ms-3'>
                                        <p className='fs_lg fw-semibold ff_opensans mb-0 clr_darkgreen'>John Doe</p>
                                        <p className='fs_md fw-light ff_opensans mb-0 clr_darkgreen'>Mauris pretium,USA </p>
                                    </div>
                                </div>
                                <p className='fs_md wf-light ff_opensans clr_darkgreen pt-3'>“Integer odio est, efficitur nec nibh quis, euismod ultricies diam.
                                    Quisque accumsan libero vitae massa consequat consequat. Sed eu tincidunt lacus, in” </p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='p-3 border_grey mt-4 mt-lg-0'>
                                <div className="d-flex align-items-center">
                                    <img src={johnDoe3} alt="image" />
                                    <div className='ms-3'>
                                        <p className='fs_lg fw-semibold ff_opensans mb-0 clr_darkgreen'>John Doe</p>
                                        <p className='fs_md fw-light ff_opensans mb-0 clr_darkgreen'>Mauris pretium,USA </p>
                                    </div>
                                </div>
                                <p className='fs_md wf-light ff_opensans clr_darkgreen pt-3'>“Integer odio est, efficitur nec nibh quis, euismod ultricies diam.
                                    Quisque accumsan libero vitae massa consequat consequat. Sed eu tincidunt lacus, in” </p>
                            </div>
                        </Col>
                    </Row>
                    <div className='slider_left_arrow d-none d-lg-block crusor_pointer'>
                        <svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3.71429L5.625 13L15 22.2857L13.125 26L0 13L13.125 0L15 3.71429Z" fill="#073937" />
                        </svg>
                    </div>
                    <div className='slider_right_arrow d-none d-lg-block crusor_pointer'>
                        <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.71429L9.375 13L0 22.2857L1.875 26L15 13L1.875 0L0 3.71429Z" fill="#073937" />
                        </svg>
                    </div>
                    <div className='leafimg_2 d-none d-sm-block'>
                        <img className='w-50' src={leaf2} alt="" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Slider