import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import heartImage from '../image/svg/heartimage.svg';
import pageLogo from '../image/svg/pagelogo.svg'


const MyNav = () => {
    return (
        <>
            <Navbar expand="lg" className='nav_bg'>
                <Container>
                    <Navbar.Brand href="#"><img src={pageLogo} alt="page-logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                        </Nav>
                        <div className='d-sm-flex align-items-center'>
                            <ul className='d-sm-flex p-0 m-0'>
                                <li className='me-lg-5 my-3 my-lg-0'><a className='position-relative hover_line hover_line_2 fs_md fw-semibold text-white ff_opensans' href="#">LEARN</a></li>
                                <li className='me-lg-5 my-3 my-lg-0'><a className='position-relative hover_line hover_line_2 fs_md fw-semibold text-white ff_opensans' href="#">LISTINGS</a></li>
                                <li className='me-lg-5 my-3 my-lg-0'><a className='position-relative hover_line hover_line_2 fs_md fw-semibold text-white ff_opensans' href="#">COMMUNITIES</a></li>
                                <li className='me-lg-5 my-3 my-lg-0'><a className='position-relative hover_line hover_line_2 fs_md fw-semibold text-white ff_opensans' href="#">CONTACT</a></li>
                            </ul>
                            <div className='me-5 d-none d-sm-block'>
                                <img className='translate_hover crusor_pointer' src={heartImage} alt="heartimage" />
                            </div>
                            <div className='me-5'>
                                <NavDropdown className='fs_md fw-semibold text-white ff_opensans' title="$ USD" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className='d-none d-sm-block'>
                                <span className='menu_icon'></span>
                                <span className='menu_icon my-1'></span>
                                <span className='menu_icon'></span>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNav