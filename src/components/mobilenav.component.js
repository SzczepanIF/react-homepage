import React from "react";
import { Link } from "react-router-dom";


export default class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      labels: props.labels
    }
  }

  toggleMenu() {
    let bodyElement = document.querySelector('body');

    this.setState({
      isHidden: !this.state.isHidden
    });

    if (this.state.isHidden) {
      bodyElement.classList.add('is-locked');
    } else {
      bodyElement.classList.remove('is-locked');
    }
  }

  render () {
    return (
      <div className="mobile-nav" onClick={this.toggleMenu.bind(this)}>
        <span className="material-icons md-48">reorder</span>

        <div className={
        this.state.isHidden ? 'list is-hidden' : 'list' }>
          <span className="cancel-btn material-icons md-64" onClick={this.toggleMenu.bind(this)}>clear</span>
          <ul className="list my-5 text-center" role="navigation">
            <li className="list-item px-2">
              <Link to="/" className="text-secondary">
                {this.state.labels.home}
              </Link>
            </li>
            <li className="liste-item px-2">
              <Link to="/about" className="text-secondary">
                {this.state.labels.about}
              </Link>
            </li>
            <li className="list-item px-2">
              <Link to="/companies" className="text-secondary">
                {this.state.labels.companies}
              </Link>
            </li>
            <li className="list-item px-2">
              <Link to="/projects" className="text-secondary">
                {this.state.labels.projects}
              </Link>
            </li>
            <li className="list-item px-2">
              <Link to="/technologies" className="text-secondary">
                {this.state.labels.technologies}
              </Link>
            </li>
            <li className="list-item px-2">
              <Link to="/contact" className="text-secondary">
                {this.state.labels.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
