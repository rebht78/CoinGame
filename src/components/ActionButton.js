import React from "react";
import "./ActionButton.css";

class ActionButton extends React.Component {
  render() {
    return (
      <div>
        <button className="action">{this.props.actiontext}</button>
      </div>
    );
  }
}

export default ActionButton;
