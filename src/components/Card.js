import React from "react";

class Card extends React.Component {
  render(props) {
    return (
      <section className="card-section">
        <div className="card">
          <img
            width="200"
            height="200"
            src={this.props.frontImage}
            alt="JS Image"
          />
        </div>
      </section>
    );
  }
}

export default Card;
