import React from "react";
import "./Card.css";

class Card extends React.Component {
  render(props) {
    return (
      <section className="card-section">
        <div className="card">
          <img
            className="front-face"
            width="200"
            height="200"
            onClick={this.props.clickhandler}
            src={this.props.frontImage}
            alt="JS Image"
          />
          <img
            className="back-face"
            width="200"
            height="200"
            src={this.props.backImage}
            alt="JS Image"
          />
        </div>
      </section>
    );
  }
}

export default Card;
