import React from 'react';
import PlanItem from './plan_item.js';

const PlanCategory = (props) => {
    return props.data.map(item => {
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

export default PlanCategory;