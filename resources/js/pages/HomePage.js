import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/HomeBanner";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
            </Fragment>
        );
    }
}

export default HomePage;
