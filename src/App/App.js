import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../Router/withRouter";
import AppRoutes from "./Routes";
import Headermain from "../Header/Header.js";
import Footermain from "../Footer/Footer.js";
import "./App.css";

function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Headermain />
                <AppRoutes />
                <Footermain />
            </ScrollToTop>
        </Router>
    );
}