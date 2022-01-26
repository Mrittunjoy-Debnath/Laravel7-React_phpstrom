import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMap,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="jumbotron jumbotron-fluid bg-light mb-8">
                    <Container className="container">
                        <Row>
                            <Col sm={6} lg={3} md={3}>
                                <h3 className="title-text">Follow Me</h3>
                                <hr/>
                                <p><a target="_blank" href="#" className="footer-link"><FontAwesomeIcon icon={faFacebook} /> Facebook </a> </p>
                                <p><a target="_blank" href="#" className="footer-link"><FontAwesomeIcon icon={faYoutube} /> Youtube </a> </p>
                            </Col>
                            <Col sm={6} lg={3} md={3}>
                                <h3 className="title-text">My Address</h3>
                                <hr/>
                                <p className="des-text"><FontAwesomeIcon icon={faMap} /> Basundhara ,Dhaka  </p>
                                <p className="des-text"><FontAwesomeIcon icon={faPhone} /> Phone:01986126112  </p>
                                <p className="des-text"><FontAwesomeIcon icon={faEnvelope} /> Email: shuvo.cse2014@gmail.com  </p>
                            </Col>
                            <Col sm={6} lg={3} md={3}>
                                <h3 className="title-text">Information</h3>
                                <hr/>
                                <p><a target="_blank" href="#" className="footer-link"> About Mrittunjoy </a> </p>
                                <p><a target="_blank" href="#" className="footer-link"> Youtube </a> </p>
                            </Col>
                            <Col sm={6} lg={3} md={3}>
                                <h3 className="title-text">Another Work</h3>
                                <hr/>
                                <p><a target="_blank" href="#" className="footer-link"> Website1 </a> </p>
                                <p><a target="_blank" href="#" className="footer-link"> Website2 </a> </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container fluid={true} className="text-white m-0 text-center p-3 custom-bg">
                    <p className="credit-text my-2">All Rights Reserved by Mrittunjoy Debnath</p>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
