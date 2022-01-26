import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import reactLogo from "../../images/reactLogo.svg";
class LoadingDiv extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img className="loading-logo" src={reactLogo}/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default LoadingDiv;
