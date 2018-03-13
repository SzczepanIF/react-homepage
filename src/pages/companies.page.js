import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import avausLogo from '../media/company/avaus.jpg';
import benqLogo from '../media/company/benq.jpeg';
import codersLabLogo from '../media/company/coderslab.png';
import intiveLogo from '../media/company/intive.jpg';
import mediaAmbasadorLogo from '../media/company/mediaamba.png';
import micazookLogo from '../media/company/micazook.jpeg';
import nkLogo from '../media/company/nk.jpeg';
import nsnLogo from '../media/company/nsn.jpg';
import unicLogo from '../media/company/unic.jpg';

import companiesPhoto from '../media/companies_photo.jpg';

export default class CompaniesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'Front-End Commercial Experience',
      },
      companiesLogos: {
        avaus: avausLogo,
        benq: benqLogo,
        codersLab: codersLabLogo,
        intive: intiveLogo,
        mediaAmbasador: mediaAmbasadorLogo,
        micazook: micazookLogo,
        nk: nkLogo,
        nokia: nsnLogo,
        unic: unicLogo,
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
          <ul className="list-inline pb-2 text-center">
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.intive} alt="Intive" />
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.codersLab} alt="Coders Lab" />
            </li>
          </ul>
          <hr className="hr" />
          <h2 className="h4 text-center py-4"><span className="material-icons ">timeline</span> Had also a pleasure to cooperate in the past with:</h2>
          <ul className="list-inline pb-2 px-4 text-center">
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.unic} alt="Unic" />
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.micazook} alt="Micazook"/>
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.avaus} alt="Avaus Consulting" />
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.nk} alt="Nasza-Klasa" />
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.nokia} alt="Nokia Siemens Networks"/>
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.mediaAmbasador} alt="Media Ambassador"/>
            </li>
            <li className="list-inline-item">
              <img src={this.state.companiesLogos.benq} alt="BenQ Poland"/>
            </li>
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
