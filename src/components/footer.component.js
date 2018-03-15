import React from "react";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share';

import reactLogo from '../media/technology/react_logo_transparent.png'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labels: {
        copyright: 'Copyright',
        year: '2018',
        name: 'Marcin Szczepanczyk',
      },
      media: {
        reactLogo: reactLogo,
      },
      shareUrl: 'http://szczepanczyk.org'
    };
  }

  render() {
    return (
      <footer className="bg-primary p-2 text-right">
        <span className="footer-react-logo-wrapper">Powered by <img src={this.state.media.reactLogo} alt="powered by React" className="footer-react-logo" /></span>
        {this.state.labels.copyright} <span className="material-icons">copyright</span> 2018 by {this.state.labels.name}
        <ul className="list list-inline text-center mt-2">
          <li className="list-inline-item">
            <FacebookShareButton url={this.state.shareUrl} >
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </li>
          <li className="list-inline-item">
            <GooglePlusShareButton url={this.state.shareUrl}>
              <GooglePlusIcon size={32} round={true} />
            </GooglePlusShareButton>
          </li>
          <li className="list-inline-item">
            <LinkedinShareButton url={this.state.shareUrl}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </li>
          <li className="list-inline-item">
            <TwitterShareButton url={this.state.shareUrl}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </li>
        </ul>
      </footer>
    );
  }
}
