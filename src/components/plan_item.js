import React from 'react';
import '../styles/plan_item.css';

const PlanItem = (props) => {
    const { goal, source, get_title } = props;
    return (
        <div className="plan-item" onClick={() => get_title(goal)}>
            <img className="plan-item__image" src={source} alt="" />
            {goal}
        </div>
    )
}

export default PlanItem;