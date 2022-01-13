import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <div>
                    <h2>Home Page</h2>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
