import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PlanInfo from "./components/plan_info.js";
import PlanCategory from "./components/plan_category.js";
import PlanTitle from "./components/plan_title.js";
import PlanGoal from "./components/plan_goal.js";
import data from "./data/data.json";

class App extends Component {
  state = {
    data: data,
    goal: "",
    saved: "",
    date: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    },
    save_daily: 0,
    plan_title: "",
    plan_subtitle: ""
  };

  getTitle = title => {
    this.setState({
      plan_title: title
    });
  };

  getSubtitle = description => {
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
  };

  calculateDaily = () => {
    const { day, month, year } = this.state.date;
    const { goal, saved } = this.state;

    const date = new Date(year, month, day);
    const daysLeft = Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24));
    const target = goal > 0 && goal > saved ? goal - saved : 0;
    const save_daily = (target / daysLeft || 0).toFixed(2);

    if (daysLeft > 0) {
      this.setState({ save_daily });
    } else if (daysLeft === 0) {
      this.setState({ save_daily: target.toFixed(2) });
    } else {
      this.setState({ save_daily: 0.0 });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <PlanInfo
                    goal={this.state.goal}
                    saved={this.state.saved}
                    date={this.state.date}
                  />
                </div>
              );
            }}
          />

          <Route
            path="/category"
            render={() => {
              return (
                <div>
                  <PlanCategory
                    data={this.state.data}
                    getTitle={this.getTitle}
                    step={1}
                  />
                </div>
              );
            }}
          />

          <Route
            path="/title"
            render={() => {
              return (
                <div>
                  <PlanTitle
                    plan_title={this.state.plan_title}
                    plan_subtitle={this.state.plan_subtitle}
                    getSubtitle={this.getSubtitle}
                    step={2}
                  />
                </div>
              );
            }}
          />

          <Route
            path="/goals"
            render={() => {
              return (
                <div>
                  <PlanGoal
                    state={this.state}
                    changeGoal={this.onGoalChange}
                    changeSaved={this.onSavedChange}
                    handleDateChange={this.onDateChange}
                    step={3}
                  />
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
