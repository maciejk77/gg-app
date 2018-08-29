import React, { Component } from "react";
import PlanItem from "./plan_item.js";
import { Link } from "react-router-dom";
import StepsBar from "./steps_bar";
import propTypes from "prop-types";

class PlanCategory extends Component {
  constructor(props) {
    super(props);

        this.state = {
            selected: 0
        }       
    }

    handle_click = (e) => {
        e.preventDefault();
		// this.props.getTitle(this.props.goal);
		this.setState({
            selected: parseInt(e.currentTarget.dataset.id) - 1
        });
    }
    
    render() {
        const render_list = this.props.data.map((item,i) => {
                return (
                    <PlanItem
                        key={item.id} 
                        id={item.id}
                        goal={item.goal}
                        source={item.source}
                        getTitle={this.props.getTitle}
                        handle_click={(e) => this.handle_click(e)}
                        selected={i === this.state.selected ? true : false}
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
