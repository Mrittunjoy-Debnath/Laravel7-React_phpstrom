import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;
