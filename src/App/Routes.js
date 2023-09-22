import React from "react";
import { Route, Routes } from "react-router-dom";
import withRouter from "../Router/withRouter";
import { Home } from "../Pages/Home/Home";
import { Products } from "../Pages/Products/Products";
import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Routes.scss";

const AnimatedRoutes = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
)); 

  function AppRoutes() {
    return (
      <div className="s_c">
        <AnimatedRoutes />
      </div>
    );
  }
  
  export default AppRoutes;