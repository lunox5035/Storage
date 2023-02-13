import React from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function NabBarElements() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="me-auto" href="/">
            <img
              alt=""
              src="/logo.svg"
              width="150"
              height="80"
              className="d-inline-block align-top "
            />
            React Bootstrap
          </Navbar.Brand>
          
          <Nav defaultActiveKey="/" as="ul" >
            <Nav.Item as="li">
              <Nav.Link href="/About">MyPage</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">sign in</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">sign up</Nav.Link>
            </Nav.Item>
          </Nav>
      </Navbar>

      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/CreateLable">입력</Nav.Link>
          <Nav.Link href="/board">출력</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>


        <Stack direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Add your item here..." />
          <Button variant="secondary">Submit</Button>
        </Stack>
      </Navbar>


      <Outlet />
    </>
  );
}

export default NabBarElements