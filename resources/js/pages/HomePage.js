import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/HomeBanner";
import CourseFeature from "../components/courseFeature";
import CoursePlanHome from "../components/CoursePlanHome";
import PaymentGuide from "../components/PaymentGuide";
import MoreSeries from "../components/moreSeries";
import Footer from "../components/Footer";
class HomePage extends Component {


    render() {
        return (
            <Fragment>
                <Menu/>
                <HomeBanner/>
                <CourseFeature/>
                <CoursePlanHome/>
                <PaymentGuide/>
                <MoreSeries/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
