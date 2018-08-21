import React, { Component } from 'react';
import PlanInfo from './components/plan_info.js';
// import PlanCategory from './components/plan_category.js';
// import PlanTitle from './components/plan_title.js';
// import PlanGoals from './components/plan_goals.js';

class App extends Component {
  render() {
    return (
      <div>
        <PlanInfo />
        {/* <PlanCategory />
        <PlanTitle />
        <PlanGoals /> */}
      </div>
    );
  }
}

export default App;
