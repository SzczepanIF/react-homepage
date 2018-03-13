import React from "react";
import { Link } from "react-router-dom";
import photoUrl from "../media/msz_photo.jpg"
import MobileNav from './mobilenav.component';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: {
        home: "Home",
        about: "About",
        companies: "Companies",
        projects: "Projects",
        technologies: "Technologies",
        contact: "Contact"
      },
      content: {
        name: "Marcin Szczepanczyk",
        position: "Senior Front-End  Developer",
        photoUrl: photoUrl
      }
    };
  }

  render() {
    return (
      <header className="bg-primary full-width text-left">
        <MobileNav labels={this.state.labels}/>
        <h1 className="h2 text-left text-light p-2 d-block d-md-inline-block ">
          {this.state.content.name}
        </h1>
        <h2 className="h6 text-left text-secondary p-2 pb-3 d-block d-md-inline-block pr-2">
          {this.state.content.position}
        </h2>
        <img src={this.state.content.photoUrl} className="logo-image" alt="Marcin Szczepanczyk Photography"/>
        <ul className="list-inline pb-2 text-center" role="navigation">
          <li className="list-inline-item px-2">
            <Link to="/" className="text-secondary">
              {this.state.labels.home}
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link to="/about" className="text-secondary">
              {this.state.labels.about}
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link to="/companies" className="text-secondary">
              {this.state.labels.companies}
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link to="/projects" className="text-secondary">
              {this.state.labels.projects}
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link to="/technologies" className="text-secondary">
              {this.state.labels.technologies}
            </Link>
          </li>
          <li className="list-inline-item px-2">
            <Link to="/contact" className="text-secondary">
              {this.state.labels.contact}
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}
