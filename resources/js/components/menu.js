import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand className="text-dark" href="#home">Laravel + React </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className="nav-font" href="#home"><NavLink to="/">Home</NavLink></Nav.Link>
                                <Nav.Link className="nav-font" href="#link"><NavLink to="/courseplan">Course Plan</NavLink></Nav.Link>
                                <Nav.Link className="nav-font" href="#link"><NavLink to="/registration">Registration</NavLink></Nav.Link>
                                <Nav.Link className="nav-font" href="#link"><NavLink to="/freeclass">Free Class</NavLink></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;
