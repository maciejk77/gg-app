import React, { Component } from 'react';
//import PlanInfo from './components/plan_info.js';
// import PlanCategory from './components/plan_category.js';
// import PlanTitle from './components/plan_title.js';
import PlanGoals from './components/plan_goals.js';

class App extends Component {

  state = {
    goal : 0,
    saved: 0,
    date: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    },
    save_daily: 0,
    plan_title: 'test title'
  }

  onGoalChange = (e) => {
    this.setState({
      ...this.state,
      goal : e.target.value
    },this.calculateDaily())
  }

  onSavedChange = (e) => {
    this.setState({
      ...this.state,
      saved : e.target.value
    },this.calculateDaily())
  }

  onDateChange = (e) => {
    let date = this.state.date;
    const name = e.target.name;
    const value = e.target.value;
    date[name] = value;
    
    this.setState({
      ...this.state,
      date
    },this.calculateDaily())
  }

  calculateDaily = () => {
    
  }

  render() {
    return (
      <div>
        {/*<PlanInfo />
         <PlanCategory />
        <PlanTitle />*/}
        <PlanGoals 
          state={this.state}
          changeGoal={this.onGoalChange} 
          changeSaved={this.onSavedChange} 
          handleDateChange={this.onDateChange}
        /> 
      </div>
    );
  }
}

export default App;
