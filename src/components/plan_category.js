import React from 'react';
import data from '../data/data.json';
import PlanItem from './plan_item.js';

const PlanCategory = () => {
    return data.map(item => {
        return <PlanItem
                key={item.id} 
                id={item.id}
                goal={item.goal}
                source={item.source}
        /> 
    });
} 

export default PlanCategory;