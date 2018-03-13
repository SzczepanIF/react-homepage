import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import angularLogo from '../media/technology/angular2_logo.png';
import angularJsLogo from '../media/technology/AngularJS_logo.svg.png';
import reactLogo from '../media/technology/react_logo.png';
import vueLogo from '../media/technology/vue_logo.png';
import ecmascriptLogo from '../media/technology/ecmascript_logo.png';
import typescriptLogo from '../media/technology/ts_logo.jpg';
import sassLogo from '../media/technology/sass_logo.png';
import webpackLogo from '../media/technology/webpack_logo.png';
import wcagLogo from '../media/technology/wcag_logo.png';

import technologiesPhoto from '../media/technologies_photo.jpg';

export default class TechnologiesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'Technologies I love:',
      },
      technologiesLogos: {
        angular: angularLogo,
        angularJS: angularJsLogo,
        react: reactLogo,
        vue: vueLogo,
        ecmascript: ecmascriptLogo,
        typescript:typescriptLogo,
        sass:sassLogo,
        webpack: webpackLogo,
        wcag: wcagLogo,
      },
      media: {
        technologiesPhoto: technologiesPhoto
      }
    }

    this.photoStyles = {
      backgroundImage: 'url(' + this.state.media.technologiesPhoto +')'
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
        <div className="py-4 px-3 technologies text-center">
          <h1 className="h2 text-center text-primary">♥ {this.state.content.mainTitle}</h1>
          <hr className="hr" />
          <div className="working-photo" style={ this.photoStyles }>
          </div>
          <hr className="hr" />
          <img src={this.state.technologiesLogos.angular} alt="Angular 2+" />
          <img src={this.state.technologiesLogos.angularJS} alt="Angular"/>
          <img src={this.state.technologiesLogos.react} alt="React"/>
          <img src={this.state.technologiesLogos.vue} alt="Vue.js" />
          <img src={this.state.technologiesLogos.ecmascript} alt="ECMAScript" />
          <img src={this.state.technologiesLogos.typescript} alt="Typescript" />
          <img src={this.state.technologiesLogos.sass} alt="sass" />
          <img src={this.state.technologiesLogos.webpack} alt="Webpack" />
          <img src={this.state.technologiesLogos.wcag} alt="WCAG 2.0" />
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
