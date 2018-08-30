import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";

import StepsBar from "./steps_bar";

class PlanTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  static contextTypes = {
    router: propTypes.object.isRequired
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
  };

  handleClick = () => {
    this.props.getSubtitle(this.state.term);
    this.setState({ term: "" });
    this.context.router.history.push("/goals");
  };

  render() {
    return (
      <div className="plan-title">
        <StepsBar step={this.props.step} />
        <h3 className="plan-title__title">Personalise</h3>
        <label className="plan-title__label">Give your goal a name</label>
        <input
          className="plan-title__title-input"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <div className="button-group">
          <button className="button-group__next" onClick={this.handleClick}>
            Next
          </button>
          <Link to="/category" className="button-group__back">
            &lt;back
          </Link>
        </div>
      </div>
    );
  }
}

PlanTitle.propTypes = {
  getSubtitle: propTypes.func,
  step: propTypes.number
};

export default withRouter(PlanTitle);
