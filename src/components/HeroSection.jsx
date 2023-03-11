import React from 'react'
import playPause from '../image/svg/playpause.svg'
import dowmBtn from '../image/svg/downbtn.svg'
import { Container } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <>
            <section className=''>
                <div className='pt-5'>
                    <Container className='py-5'>
                        <div>
                            <button className='backtotop'>Top</button>
                        </div>
                        <div className="py-5">
                            <h1 className='fs_58 fw-bold ff_roman text-white text-center'>The modern way to buy and own a second home</h1>
                            <div className='d-flex justify-content-center py-3'>
                                <a href="#" className='fs_xl fw-bold text-white view_btn_padding btn_hover'>VIEW LISTINGS</a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <img className='crusor_pointer' src={playPause} alt="playbtn" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href="#down-arrow"><img src={dowmBtn} alt="next-btn" /></a>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default HeroSection