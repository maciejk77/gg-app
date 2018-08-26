import React from 'react';
import '../styles/plan_item.css';

const PlanItem = (props) => {
  const { goal, source, getTitle } = props;
    return (
        <div className="plan-item" onClick={() => getTitle(goal)}>
            <img className="plan-item__image" src={`/images/${source}.png`} style={{width: "40%"}} alt="" />
            {goal}
        </div>
    )
}

export default PlanItem;