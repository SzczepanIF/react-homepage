import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import thumbUpPhoto from '../media/thumb_up_photo.jpg';

export default class ConctactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'Feel Free to contact me',
        contact: {
          mail: 'marcin.szczepanczyk1985@gmail.com',
          phone: '+48 510549513',
          github: 'http://github.com/SzczepanIF',
          linkedIn: 'https://www.linkedin.com/in/marcin-szczepanczyk-7534785/'
        }
      },
      media: {
        thumbUpPhoto: thumbUpPhoto
      }
    }

    this.photoStyles = {
      backgroundImage: 'url(' + this.state.media.thumbUpPhoto +')'
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
          <div className="working-photo" style={ this.photoStyles }></div>
          <hr className="hr" />
          <p className="text-center"><strong>Mail</strong>: <span className="material-icons md-14">email</span> {this.state.content.contact.mail}</p>
          <p className="text-center"><strong>Mobile phone</strong>: <span className="material-icons md-14">phone</span> {this.state.content.contact.phone}</p>
          <p className="text-center"><strong>Github profile</strong>: <span className="material-icons md-14">build</span> <a href={this.state.content.contact.github}>{this.state.content.contact.github}</a></p>
          <hr className="hr" />
          <h2 className="h4 text-center py-3">Want to see my CV? <span className="material-icons md-64">search</span></h2>
          <p className="text-center"><strong>LinkedIn profile</strong>: <span className="material-icons md-14">wallpaper</span>  <a href={this.state.content.contact.linkedIn}>{this.state.content.contact.linkedIn}</a></p>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
