import React from 'react'
import halfLeaf from '../image/svg/halfleaf.svg'
const MissOut = () => {
    return (
        <>
            <section className='py-5 position-relative'>
                <div className="custom_container">
                    <div className="text-center">
                        <h6 className='fs_49 fw-bold ff_roman clr_darkgreen'>Don't miss out</h6>
                        <p className='fs_lg fw-light ff_opensans clr_darkgreen'>The best homes sell fast. See the latest listings, inspiring second homes and buying tips.</p>
                    </div>
                    <input className='w-100 enter-mail-input fs_lg fw-semibold ff_opensans clr_darkgreen mt-5' type="e-mail" placeholder='ENTER  EMAIL' />
                    <p className='fs_lg fw-light ff_opensans clr_darkgreen mt-5'>Select one of the following:</p>
                    <div className="d-sm-flex align-items-center">
                        <div>
                            <input className='radio_btn_size' name='type' type="radio" id="buyer" />
                            <label className='fs_lg fw-light ff_opensans clr_darkgreen mb-0 ms-2' htmlFor="buyer">I am a buyer</label>
                        </div>
                        <div className='ps-sm-4'>
                            <input className='radio_btn_size' name='type' type="radio" id="buyer-2" />
                            <label className='fs_lg fw-light ff_opensans clr_darkgreen mb-0 ms-2' htmlFor="buyer-2">I am a seller</label>
                        </div>
                        <div className='ps-sm-4'>
                            <input className='radio_btn_size' name='type' type="radio" id="buyer-3" />
                            <label className='fs_lg fw-light ff_opensans clr_darkgreen mb-0 ms-2' htmlFor="buyer-3">I'm an agent or broker</label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                        <a href="#" className='fs_xl fw-bold text-white view_btn_padding btn_hover'>SUBSCRIBE</a>
                    </div>
                    <p className='text-center fw-semibold ff_opensans fs_xsm clr_darkgreen mt-4'>I give mana permission to contact me & agree to the  terms.This site is protected by reCAPTCHA and the Google privacy policy  &  terms of service.</p>
                    <p className='fs_lg fw-light ff_opensans clr_darkgreen mb-0 text-center mt-2'>Want to chat? <span className='fw-semibold get_started_btn position-relative'>Contact us.</span></p>
                </div>
                <div className='leafimg_3 d-none d-md-block'>
                    <img src={halfLeaf} alt="image" />
                </div>
            </section>
        </>
    )
}

export default MissOut