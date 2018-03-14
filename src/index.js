import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, Switch} from "react-router-dom";

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
      <Router basename="/">
        <div className="container">
          <Header />
          <section className="bg-white text-primary p-2">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage}  />
            <Route path="/companies" component={CompaniesPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/technologies" component={TechnologiesPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          </section>
          <Footer />
        </div>
      </Router>
  </div>
);

render(<App />, document.getElementById("root"));
