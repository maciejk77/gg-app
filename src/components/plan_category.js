import React, { Component } from "react";
import PlanItem from "./plan_item.js";
import { Link } from "react-router-dom";
import StepsBar from "./steps_bar";
import propTypes from "prop-types";

class PlanCategory extends Component {
  constructor(props) {
    super(props);

    this.render_list = this.render_list.bind(this);
  }

  render_list() {
    return this.props.data.map(item => {
      return (
        <PlanItem
          key={item.id}
          id={item.id}
          goal={item.goal}
          source={item.source}
          getTitle={this.props.getTitle}
        />
      );
    });
  }
  render() {
    return (
      <div className="plan-category">
        <StepsBar step={this.props.step} />
        <div>What are you saving for?</div>
        <div className="plan-category__list">{this.render_list()}</div>
        <div className="button-group">
          <Link to="/title" className="button-group__next">
            {" "}
            Next{" "}
          </Link>
          <Link to="/" className="button-group__back">
            {" "}
            &lt;back{" "}
          </Link>
        </div>
      </div>
    );
  }
}

PlanCategory.propTypes = {
  // data: ,
  // getTitle: ,
  step: propTypes.number
};

export default PlanCategory;
