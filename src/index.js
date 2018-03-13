import React from "react";
import { render } from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/header.component";
import Footer from "./components/footer.component";

//Pages
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import CompaniesPage from "./pages/companies.page";
import ProjectsPage from "./pages/projects.page";
import TechnologiesPage from "./pages/technologies.page";
import ContactPage from "./pages/contact.page";

//CSS
import "./styles/bootstrap.css";
import "./styles/animations.css";
import "./styles/theme.css";

const App = () => (
  <div className="bg-primary">
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={1200}
      transitionEnterTimeout={1200}
      transitionLeaveTimeout={400}
      transitionName="SlideIn"
    >
      <Router>
        <div className="container">
          <Header />
          <section className="bg-white text-primary p-2">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage}  />
            <Route exact path="/companies" component={CompaniesPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/technologies" component={TechnologiesPage} />
            <Route exact path="/contact" component={ContactPage} />
          </Switch>
          </section>
          <Footer />
        </div>
      </Router>
    </ReactCSSTransitionGroup>
  </div>
);

render(<App />, document.getElementById("root"));
