import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import axios from "axios";
class Registration extends Component {

    state = {
        email: "",
        password:""
    };

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm = (e) =>{
        e.preventDefault();

        axios.get('/sanctum/csrf-cookie').then(response => {
            let data = this.state;
            const res=axios.post('/api/details',data).then(res=>{
                if(res.data.status===200){
                    history.push('/home');
                }else if(res.data.status===401){

                }
            });
        });


    }

    render() {
        return (
            <Fragment>
                <Menu/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-center">Registration</h2>
                            <form className="form-horizontal" onSubmit={this.submitForm} >

                                <div className="form-group row">
                                    <label className="col-sm-3 text-right control-label col-form-label">E-Mail
                                        Address</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name="email" placeholder="email" value={this.state.email} onChange={(event)=>this.handleChange(event)}/>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-3 text-right control-label col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" name="password"
                                               placeholder="password" value={this.state.password} onChange={(event)=>this.handleChange(event)}/>
                                    </div>
                                </div>

                                <div className="border-top">
                                    <div className="card-body ">
                                        <label className="col-sm-3 text-right control-label col-form-label"></label>
                                        <div className="col-sm-9">
                                            <input type="submit" className="btn btn-danger btn-block mx-4"
                                                   value="Submit"/>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Registration;
