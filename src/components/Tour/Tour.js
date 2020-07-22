import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleClick() {
    this.setState({ showInfo: !this.state.showInfo });
  }

  /*
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }
  */

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="image of the tour" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i className="fa fa-window-close" aria-hidden="true"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span>
              <i
                onClick={this.handleClick.bind(this)}
                class="fa fa-caret-square-o-down"
                aria-hidden="true"
              ></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
