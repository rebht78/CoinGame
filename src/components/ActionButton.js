import React from "react";
import "./ActionButton.css";

class ActionButton extends React.Component {
  render() {
    return (
      <div className="btncontainer">
        <button className="action">{this.props.actiontext}</button>
      </div>
    );
  }
}

export default ActionButton;
