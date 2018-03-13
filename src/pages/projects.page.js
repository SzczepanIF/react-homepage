import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {
        mainTitle: 'Projects I was involved in'
      }
    };
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

        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
