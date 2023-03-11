import React from 'react'
import VideoImg from '../image/png/videoimg.png'
import leafImage from '../image/svg/leafimage.svg'
import { Col, Container, Row } from 'react-bootstrap'

const OwnJoy = () => {
    return (
        <>
            <section className='py-5 mt-sm-5 position-relative'>
                <Container className='py-3'>
                    <div className='leaf-image d-none d-xl-block'><img className='w-100' src={leafImage} alt="" /></div>
                    <Row className='align-items-center'>
                        <Col sm={12} xl={7}>
                            <img className='w-100' src={VideoImg} alt="" />
                        </Col>
                        <Col sm={12} xl={5} className='mt-5'>
                            <div className='ps-xl-5 mb-5'>
                                <h4 className='fs_49 fw-bold ff_roman clr_lightdark mt-4 mt-xl-0'>Own the joy</h4>
                                <p className='clr_lightdark fs_lg fw-light ff_opensans pb-4'>Start enriching your life today, not "someday." We're here to help
                                    you experience the joy of second home ownership. With Mana, you own
                                    a spectacular second home for 1/8 of the cost, while avoiding the hassles
                                    of traditional ownership.</p>
                                <a href="#" className='fs_lg fw-semibold ff_opensans clr_lightdark get_started_btn position-relative'>GET STARTED</a>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-5 mt-5 align-items-center flex-column-reverse flex-lg-row'>
                        <Col lg={5}>
                            <div className='mt-4 mt-lg-0'>
                                <h4 className='fs_49 fw-bold ff_roman clr_lightdark'>Forget timeshares</h4>
                                <p className='clr_lightdark fs_lg fw-light ff_opensans pb-4'>With Mana, you own a home, not just
                                    a block of time. You can book stays throughout the year, not annually. And resale? It's fast
                                    and streamlined, and you set the price.</p>
                                <a href="#" className='fs_lg fw-semibold ff_opensans clr_lightdark get_started_btn position-relative'>GET STARTED</a>
                            </div>
                        </Col>
                        <Col lg={7} className='hide_scrollbar'>
                            <div className='overflow-auto'>
                                <table className='table_width_xsm'>
                                    <tr>
                                        <th className='text-center py-3 bg_darkgreen fs_lg fw-semibold ff_opensans text-white' colSpan={2}>MANA HOME</th>
                                        <th className='bg_green fs_lg fw-semibold ff_opensans text-white px-5'>RESORT TIMESHARE</th>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>PROPERTY TYPE</td>
                                        <td className='py-3 ps-sm-5'>Single-family residence</td>
                                        <td className='py-3 ps-sm-5'>Hotel/Condo</td>
                                    </tr>
                                    <tr className='table_border'>
                                        <td className='py-3'>TRUE OWNERSHIP</td>
                                        <td className='py-3 ps-sm-5'>Yes, real property</td>
                                        <td className='py-3 ps-sm-5'>No, right-to-use time</td>
                                    </tr>
                                    <tr>
                                        <td className='py-3'>USAGE</td>
                                        <td className='py-3 ps-sm-5'>Ongoing access</td>
                                        <td className='py-3 ps-sm-5'>Fixed week(s)</td>
                                    </tr>
                                    <tr className='table_border'>
                                        <td className='py-3'>RESALE <br /> APPROACH</td>
                                        <td className='py-3 ps-sm-5'>Market pricing; sell <br /> on your terms</td>
                                        <td className='py-3 ps-sm-5'>Set pricing; sell with <br /> resort</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OwnJoy