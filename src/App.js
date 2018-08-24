import React, { Component } from "react";
import PlanInfo from "./components/plan_info.js";
import PlanCategory from "./components/plan_category.js";
import PlanTitle from "./components/plan_title.js";
import PlanGoals from "./components/plan_goals.js";
import data from "./data/data.json";

class App extends Component {
  state = {
    data: data,
    goal: 0,
    saved: 0,
    date: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    },
    save_daily: 0,
    plan_title: "",
    plan_subtitle: ""
  };
  componentDidMount() {
    this.getStateDataFromLocalStorage();
    let key='gg-app-local-storage';
    if (localStorage.hasOwnProperty(key)) {      
      console.log(localStorage.getItem('gg-app-local-storage'));
    }

  }

  get_title = goal => {
    this.setState({
      plan_title: goal
    });
  };

  get_subtitle = description => {
    this.setState({
      plan_subtitle: description
    });
  };

  onGoalChange = e => {
    const goal = Number(e.target.value);

    this.setState({ goal }, this.calculateDaily);
  };

  onSavedChange = e => {
    const saved = Number(e.target.value);

    this.setState({ saved }, this.calculateDaily);
  };

  onDateChange = e => {
    let date = this.state.date;
    const name = e.target.name;
    const value = e.target.value;
    date[name] = value;

    this.setState({ date }, this.calculateDaily);
    console.log(this.state)
  };

  calculateDaily = () => {
    const { day, month, year } = this.state.date;
    const { goal, saved } = this.state;

    const date = new Date(year, month, day);
    const daysLefts = Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24));
    const target = goal > 0 && goal > saved ? goal - saved : 0;

    const save_daily = (target / daysLefts || 0).toFixed(2);

    if (daysLefts > 0) {
      this.setState({ save_daily });
    } else if (daysLefts === 0) {
      this.setState({ save_daily: target.toFixed(2) });
    } else {
      this.setState({ save_daily: 0.0 });
    }
     // save to localStorage 
    localStorage.setItem('gg-app-local-storage', JSON.stringify(this.state));
  };

  getStateDataFromLocalStorage(){
    let key='gg-app-local-storage';
    if (localStorage.hasOwnProperty(key)) {
     const cachedData = localStorage.getItem('gg-app-local-storage');
      if(cachedData){
        this.setState({
          goal: JSON.parse(cachedData).goal,
          saved: JSON.parse(cachedData).saved,
          save_daily: JSON.parse(cachedData).save_daily,
          plan_title: JSON.parse(cachedData).plan_title,
          plan_subtitle: JSON.parse(cachedData).plan_subtitle,
          date: JSON.parse(cachedData).date
        });
      }
    }
 };

  render() {
    return (
      <div>
        <PlanInfo 
        plan_deadLine={this.state.date}
        plan_goal={this.state.goal}
        plan_saved={this.state.saved}
        plan_saving_percent={this.state.save_daily}
        />
        <PlanCategory data={this.state.data} get_title={this.get_title} />
        <PlanTitle
          plan_title={this.state.plan_title}
          plan_subtitle={this.state.plan_subtitle}
          get_subtitle={this.get_subtitle}
        />
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
