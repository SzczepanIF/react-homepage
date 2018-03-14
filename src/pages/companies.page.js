import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


import companiesPhoto from '../media/companies_photo.jpg';

export default class CompaniesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'Front-End Commercial Experience',
      },
      media: {
        companiesPhoto: companiesPhoto
      }
    };

    this.photoStyles = {
      backgroundImage: 'url(' + this.state.media.companiesPhoto +')'
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
        <div className="py-4 px-2 technologies">
          <h1 className="h2 text-center text-primary"><span className="material-icons">work</span> {this.state.content.mainTitle}</h1>
          <hr className="hr" />
          <div className="working-photo" style={ this.photoStyles }></div>
          <hr className="hr" />
          <h2 className="h4 text-center py-3"><span className="material-icons ">gavel</span> Currently working for:</h2>
          <ul className="list-inline pb-2 companies-list text-center">
            <li className="list-inline-item">
              <strong>Intive</strong> <a href="http://www.intive.com">http://www.intive.com</a>
            </li>
            <li className="list-inline-item">
              <strong>Coders Lab</strong> <a href="https://coderslab.pl/en">http://coderslab.pl</a>
            </li>
          </ul>
          <hr className="hr" />
          <h2 className="h4 text-center py-4"><span className="material-icons ">timeline</span> Had also a pleasure to cooperate in the past with:</h2>
          <ul className="list-inline pb-2 px-2 text-center companies-list">
            <li className="list-inline-item">
              <strong>Unic</strong> <a href="http://www.unic.com">http://www.unic.com</a>
            </li>
            <li className="list-inline-item">
              <strong>Micazook</strong> <a href="http://www.micazook.com/">http://www.micazook.com/</a>
            </li>
            <li className="list-inline-item">
              <strong>Avaus Consulting</strong> <a href="http://www.avaus.fi/pl/">https://www.avaus.fi/pl/</a>
            </li>
            <li className="list-inline-item">
              <strong>Nasza Klasa</strong> <a href="http://nk.pl">http://nk.pl</a>
            </li>
            <li className="list-inline-item">
              <strong>Nokia Siemens Networks</strong> <a href="http://nokiawroclaw.pl/">http://www.nokiawroclaw.pl/</a>
            </li>
            <li className="list-inline-item">
              <strong>Media Ambassador</strong> <a href="http://www.mediaambassador.com/">http://www.mediaambassador.com/</a>
            </li>
            <li className="list-inline-item">
              <strong>BenQ Poland</strong> <a href="http://www.benq.com.pl/">http://www.benq.com.pl/</a>
            </li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
