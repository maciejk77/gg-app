import React, { Component } from 'react';
import PlanInfo from './components/plan_info.js';
import PlanCategory from './components/plan_category.js';
import PlanTitle from './components/plan_title.js';
// import PlanGoals from './components/plan_goals.js';
import data from './data/data.json';
// import './styles/plan_category.css';


class App extends Component {
  
  state = {
    data: data
  }

  render() {
    return (
      <div>
        <PlanInfo />
        <PlanCategory
          // className="plan__category" 
          data={this.state.data} 
        />
        <PlanTitle />
        {/* <PlanGoals /> */}
      </div>
    );
  }
}

export default App;
