import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import projectsPhoto from "../media/projects_photo.jpg";

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'Projects & Area of Interest'
      },
      media: {
        projectsPhoto: projectsPhoto
      }
    };

    this.photoStyles = {
      backgroundImage: 'url(' + this.state.media.projectsPhoto +')'
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1200}
        transitionLeaveTimeout={400}
        transitionName="SlideIn"
      >
        <div className="py-4 px-2">
          <h1 className="h2 text-center text-primary">{this.state.content.mainTitle}</h1>
          <hr className="hr" />
          <div className="working-photo projects-photo" style={ this.photoStyles }>
          </div>
          <hr className="hr" />
          <h2 className="h4 text-center py-3 px-5">Most common project branches I was involved in:</h2>
          <ul className="list">
            <li className="list-item">Aviation (couple of projects for world-wide known airlines)</li>
            <li className="list-item">Social Media (worked for the biggest social media company at the given time in Poland)</li>
            <li className="list-item">E-Commerce Web Shops/Shopping Carts (a couple of projects with E-commerce prizes in Switzerland)</li>
            <li className="list-item">Public Sector (institutes/councils etc)</li>
            <li className="list-item">Education (working partially as a lecturer in the biggest Polish private IT school)</li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
