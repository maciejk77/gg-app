import React from 'react';
import '../styles/plan_item.css';

const PlanItem = (props) => {
    return (
        <div className="plan-item">
            <img className="plan-item__image" src={props.source} />
            {props.goal}
        </div>
    )
}

export default PlanItem;