import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/9MjtKBMX/Rest-logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-4" 
              />{' '}
            <span className='fw-bold fs-4' style={{color: '#F79C19'}}>B I N N G O</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header