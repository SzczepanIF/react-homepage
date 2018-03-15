import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import workingPhoto from "../media/working-photo.jpg";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        mainTitle: 'Fighting the Front-End for over a decade',
        experienceTitle: 'Front-End Experience',
        overviewTile: 'Generic Overview',
        overviewInfo: 'Experienced Front-End geek. Extremely keen on new javascript/ECMAScript stuff. Also involved in mentoring, and helping people out of the industry to jump in to the web development world. ',
        experienceInfo: "For more than 11 years, worked for many international companies - mostly within the projects surrouned by the aviation, social media, or television area. Since 2 years working also part-time as a Front-End Lecturer for 8-12 people including lectures about gulp, sass, photoshop, javascript, html5, linters etc.",
        interestInfo: 'Mostly interested in javascript MVVM frameworks. Have a solid commercial experience mostly in Angular2+/AngularJS Frameworks, but constantly updating the knowledge about frameworks like Vue.js or React',
      },
      media: {
        workingPhoto: workingPhoto,
      }
    }

    this.photoStyles = {
      backgroundImage: 'url(' + this.state.media.workingPhoto +')'
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
          <h2 className="h2 text-center text-primary">{this.state.content.mainTitle}</h2>
          <hr className="hr" />
          <div className="working-photo" style={ this.photoStyles }>
          </div>
          <hr className="hr" />
          <h3 className="h4 text-center py-3"><span className="material-icons md-64">code</span> Front-End Experience</h3>
          <p className="px-3">{this.state.content.overviewInfo}</p>
          <h3 className="h4 text-center py-3"><span className="material-icons md-64">dashboard</span> Generic Overview</h3>
          <p className="px-3">{this.state.content.experienceInfo}</p>
          <h3 className="h4 text-center py-3"><span className="material-icons md-64">build</span> Javascript Oriented</h3>
          <p className="px-3">{this.state.content.interestInfo}</p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
