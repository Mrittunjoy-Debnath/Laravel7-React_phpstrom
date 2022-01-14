import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/HomeBanner";
import CourseFeature from "../components/courseFeature";
import LoadingDiv from "../components/LoadingDiv";
import WentWrong from "../components/WentWrong";
class HomePage extends Component {


    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
            </Fragment>
        );
    }
}

export default HomePage;
