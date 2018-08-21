import React from 'react';
import '../styles/plan_item.css';

const PlanItem = (props) => {
    return (
        <div className="plan__item">
            {props.goal}
        </div>
    )
}

export default PlanItem;