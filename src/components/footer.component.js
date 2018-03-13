import React from "react";

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
      }
    };
  }

  render() {
    return (
      <footer className="bg-primary p-2 text-right">
        <span className="footer-react-logo-wrapper">Powered by <img src={this.state.media.reactLogo} alt="powered by React" className="footer-react-logo" /></span>
        {this.state.labels.copyright} <span className="material-icons">copyright</span> 2018 by {this.state.labels.name}
      </footer>
    );
  }
}
