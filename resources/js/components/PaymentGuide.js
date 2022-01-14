import React, {Component, Fragment} from 'react';
import paypal from "../../images/paypal.jpg";
import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Axios from "axios";
import LoadingDiv from "./LoadingDiv";
import WentWrong from "./WentWrong";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
class PaymentGuide extends Component {
    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }
    componentDidMount() {

        Axios.get("/getPaymentGuide").then((response)=>{
            if(response.status==200){
                this.setState({DataList:response.data,isLoading:false})
            }else {
                this.setState({isLoading:false,isError:true})
            }
        }).catch((error)=>{
            this.setState({isLoading:false,isError:true})
        })
    }
    render() {
        if(this.state.isLoading==true)
        {
            return <LoadingDiv/>
        }
        else if(this.state.isError==true)
        {
            return <WentWrong/>
        }
        else {
            const myData = this.state.DataList;
            return (
                <Fragment>
                    <Container fluid={true} className="container section-margin">
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <img className="bkash-logo" src={paypal}/><br/>
                                <p className="text-justify des-text">{ ReactHtmlParser(myData[0]['des']) }</p>
                                <Row>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <h4 className="">0000</h4>
                                                <p className="des-text m-0">Total Class</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <h4 className="">0000</h4>
                                                <p className="des-text m-0">Total Student</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} sm={12} className="p-2">
                                        <Card className="text-center">
                                            <Card.Body>
                                                <h4 className="">{myData[0]['price']}</h4>
                                                <p className="des-text m-0">Course Fee</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={6} sm={12} className="p-2 text-center">
                                <Card className="text-center h-100">
                                    <img className="card-img-top" src={myData[0]['banner']} alt="card image top"/>
                                    <Card.Body>
                                        <Nav.Link className="btn mt-2 btn-outline" href="#link"><NavLink to="/registration">Join Now</NavLink></Nav.Link>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default PaymentGuide;
