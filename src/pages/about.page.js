import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import emiratesPhoto from '../media/emirates_photo.jpg';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'A few words about myself',
        mainStory: 'I have started my IT career as a mobile phones manual tester. Very soon I have realised that web development is my natural choice for further development. And that is how it started. I just went to one of my first Front-End position offerings, and got hired, for the minimum monthly salary offered in Poland (at that time) just to have a proper start and preperation for, up to now, 10+ journey into the javascript world...',
        privateStory: 'Privately, I am a geek of far travelling, outside of Europe mostly. I am also in love with photography. I can also watch each of the Star Wars episode - anytime, anywhere. The same stands for playing Assasins Creed series.'
      },
      media: {
        emiratesPhoto: emiratesPhoto,
      }
    }

    this.photoStyles = {
      backgroundImage: 'url(' + this.state.media.emiratesPhoto + ')'
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
          <div className="working-photo emirates-photo" style={ this.photoStyles }></div>
          <hr className="hr" />
          <p className="px-3 py-2">{ this.state.content.mainStory }</p>
          <p className="px-3">{ this.state.content.privateStory }</p>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
