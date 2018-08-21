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
                />
            ) 
        });
    }    
    render() {
        return (
            <div className="plan__category">
                {this.render_list()}
            </div>
        )
    }

} 

export default PlanCategory;
