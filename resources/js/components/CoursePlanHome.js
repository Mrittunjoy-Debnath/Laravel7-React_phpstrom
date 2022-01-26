import React, {Component, Fragment} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import reactLogo from "../../images/reactLogo.svg";
import {NavLink} from "react-router-dom";
import Axios from "axios";
import LoadingDiv from "./LoadingDiv";
import WentWrong from "./WentWrong";
class CoursePlanHome extends Component {

    constructor() {
        super();
        this.state={
            DataList:[],
            isLoading:true,
            isError:false,
        }
    }
    componentDidMount() {

        Axios.get("/getCoursePlan").then((response)=>{
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

            const myData = this.state.DataList;
            return (
                <Fragment>
                    <Container fluid={true} className="jumbotron bg-light section-marginbg jumbotron-fluid">
                        <Row className="row justify-content-md-center text-center">
                            <Col class="col-md-8">


                                <NavLink className="nav-font" to="/courseplan"><img className="play-logo" src={reactLogo}/></NavLink>
                                <h5 className="title-text mt-2"><b>{myData[0]['title']}</b></h5>
                                <p className="des-text">{myData[0]['short_desc']}</p>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default CoursePlanHome;
