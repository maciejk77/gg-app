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

    let id='gg-app-local-storage';
    if (localStorage.hasOwnProperty(id)) {
            //inside state check all the keys 
      for (let key in this.state) {
              // if the key exists in localStorage
          if (localStorage.hasOwnProperty(key)) {
            // get the key's value from localStorage
            let value = localStorage.getItem(key);

            // parse the localStorage string and setState
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              // handle empty string
              this.setState({ [key]: value });
            }
          }
      }
    }
 };

  render() {
    return (
      <div>
        <PlanInfo />
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
