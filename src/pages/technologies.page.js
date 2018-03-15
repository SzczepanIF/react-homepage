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
        linksTitle: 'Useful Links:'
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
          <h2 className="h2 text-center text-primary">♥ {this.state.content.mainTitle}</h2>
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
          <hr className="hr" />
          <h3 className="h3 text-center text-primary mb-5 mt-5"><span className="material-icons">link</span> {this.state.content.linksTitle}</h3>

          <table className="table table-striped table-bordered ">
            <thead>
              <tr>
                <th>Link</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="http://smashingmagazine.com">Smashing Magazine</a></td>
                <td>Self-explanatory</td>
              </tr>
              <tr>
                <td><a href="https://caniuse.com/">Can I Use</a></td>
                <td>Features browser compatibility</td>
              </tr>
              <tr>
                <td><a href="https://angular.io/docs">Angular.io docs</a></td>
                <td>Angular 2+ documentation</td>
              </tr>
              <tr>
                <td><a href="https://vuejs.org/v2/guide/">Vue.js docs</a></td>
                <td>Vue.js documentation</td>
              </tr>
              <tr>
                <td><a href="https://codesandbox.io/">Code Sandbox</a></td>
                <td>Code Sandbox for online code with the usage of popular frameworks/libs</td>
              </tr>
              <tr>
                <td><a href="https://github.com/tc39/proposals">TC39 proposals</a></td>
                <td>ECMAScript new features proposals (github)</td>
              </tr>
              <tr>
                <td><a href="https://www.w3.org/TR/wai-aria-practices/">WCAG official docs</a></td>
                <td>Official W3C documentation for accessibility</td>
              </tr>
              <tr>
                <td><a href="http://accessibility.athena-ict.com/aria/ARIA-accessibility-home.shtml">Athena ICT examples</a></td>
                <td>WCAG 2.0 accessibility docs/examples</td>
              </tr>
              <tr>
                <td><a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Bootstrap 4+ docs</a></td>
                <td>Bootstrap documentation</td>
              </tr>
              <tr>
                <td><a href="http://phaser.io/examples">Phaser.io docs</a></td>
                <td>Documentation for game/psychics js engine</td>
              </tr>
              <tr>
                <td><a href="https://material.io/icons/">Material Design Icons</a></td>
                <td>A set of ready to use icons created by Google</td>
              </tr>
            </tbody>
          </table>

        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
