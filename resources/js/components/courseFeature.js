import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Axios from "axios";
import LoadingDiv from "./LoadingDiv";
import WentWrong from "./WentWrong";

class CourseFeature extends Component {

    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }
    componentDidMount() {

        Axios.get("/getCourseFeatures").then((response)=>{
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
        else{
            const mylist = this.state.DataList;
            const myView = mylist.map(mylist=>{
                return(
                    <Col lg={4} md={3} sm={12}>
                        <Card className="text-center">
                            <Card.Img className="item-logo" src={mylist.img} />
                            <Card.Body>
                                <Card.Title className="title-text mt-2 text-bold">{mylist.title} </Card.Title>
                                <Card.Text className="des-text">
                                    {mylist.des}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })
            return (
                <Fragment>
                    <Container className="section-margin">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default CourseFeature;
