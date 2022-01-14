import React, {Component, Fragment} from 'react';
import someWrong from "../../images/someWrong.jpg";
import {Col, Container, Row} from "react-bootstrap";
class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <img className="w-25" src={someWrong}/>
                            <h2>This is went wrong div</h2>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;
