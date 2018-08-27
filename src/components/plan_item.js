import React from 'react';
import '../styles/plan_item.css';
import propTypes from 'prop-types';

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

PlanItem.propTypes = {
  goal: propTypes.string,
  source: propTypes.string,
  getTitle: propTypes.func 
};
