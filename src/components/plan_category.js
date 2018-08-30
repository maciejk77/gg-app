import React, { Component } from "react";
import PlanItem from "./plan_item.js";
import { Link } from "react-router-dom";
import StepsBar from "./steps_bar";
import propTypes from "prop-types";

class PlanCategory extends Component {
    render() {
        const render_list = this.props.data.map((item,i) => {
                return (
                    <PlanItem
                        key={item.id} 
                        id={item.id}
                        goal={item.goal}
                        source={item.source}
                        handle_click={(e) => this.props.handleClick(e)}
                        selected={i === this.props.selected}
                    />
                ) 
            });
          
        return (
            <div className="plan-category">
                <StepsBar step={this.props.step}/>
                <div>What are you saving for?</div>
                <div className="plan-category__list">
                    {render_list}
                </div>
                <div className="button-group">
                  <Link to="/title" className="button-group__next"> Next </Link>
                  <Link to="/" className="button-group__back"> &lt;back </Link>
                </div>
            </div>
        )
    }

} 

PlanCategory.propTypes = {
  data: propTypes.array,
  getTitle: propTypes.func,
  step: propTypes.number
};

export default PlanCategory;
