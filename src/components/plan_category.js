import React, { Component } from 'react';
import PlanItem from './plan_item.js';
import '../styles/plan_category.css';

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
            ) 
        });
    }    
    render() {
        return (
            <div className="plan-category">
                <div>1----2-----3</div>
                <div>What are you saving for?</div>
                <div className="plan-category__list">
                    {this.render_list()}
                </div>
            </div>
        )
    }

} 

export default PlanCategory;
