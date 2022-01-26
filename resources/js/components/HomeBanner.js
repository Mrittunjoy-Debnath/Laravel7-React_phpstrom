import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class HomeBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container className="parallax" fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomeBanner;
