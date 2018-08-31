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
        this.setState({
            selected: parseInt(e.currentTarget.dataset.id) - 1
        });
		this.props.getTitle(this.props.data[parseInt(e.currentTarget.dataset.id)-1].goal);
		localStorage.setItem('gg-selected-item', parseInt(e.currentTarget.dataset.id) - 1);
    }
    
    render() {
        const selected_item = JSON.parse(localStorage.getItem('gg-selected-item'));
        const selected_item_id = ((selected_item !== null)
            ? selected_item
            : this.state.selected);

        const render_list = this.props.data.map((item,i) => {
                return (
                    <PlanItem
                        key={item.id} 
                        id={item.id}
                        goal={item.goal}
                        source={item.source}
                        handle_click={(e) => this.handle_click(e)}
                        selected={i===selected_item_id  ? true : false}
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
