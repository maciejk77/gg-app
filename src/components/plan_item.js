import React from 'react';
import '../styles/plan_item.css';

const PlanItem = (props) => {
    return (
        <div className="plan-item" onClick={() => props.get_title(props.goal)}>
            <img className="plan-item__image" src={props.source} alt="" />
            {props.goal}
        </div>
    )
}

export default PlanItem;