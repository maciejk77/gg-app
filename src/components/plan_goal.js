import React from "react";
import { Link } from 'react-router-dom';
import "../styles/plan_goal.css"
import StepsBar from './steps_bar';
import propTypes from 'prop-types';

const PlanGoal = ({
  state: {
    goal,
    saved,
    save_daily,
    date: { day, month, year }
  },
  changeGoal,
  changeSaved,
  handleDateChange
}) => {
  const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dateNow = new Date();
  const yearMin = dateNow.getFullYear();
  const yearMax = yearMin + 20;
  const length = yearMax - yearMin;

  const years = Array.from({ length }, (_, i) => {
    return (
      <option key={i} value={yearMin + i}>
        {yearMin + i}
      </option>
    );
  });

  const months = MONTHS.map((month_const, i) => (
    <option key={i} value={i}>
      {month_const}
    </option>
  ));
  const days = Array.from({ length: 31 }, (_, i) => (
    <option key={i} value={i + 1}>
      {i + 1}
    </option>
  ));
  
  return (
    <div className="plan-goal">
      {/* To be refactored to accept props step={3} at <StepsBar /> */}
      {/* <StepsBar step={this.props.step}/> */}
      Set your goal
      <form>
        <div>
          <input type="text" value={goal} onChange={changeGoal} />
        </div>

        <div>
          <input type="text" value={saved} onChange={changeSaved} />
        </div>

        <div>
          <select name="day" value={day} onChange={handleDateChange}>
            {days}
          </select>

          <select name="month" value={month} onChange={handleDateChange}>
            {months}
          </select>

          <select name="year" value={year} onChange={handleDateChange}>
            {years}
          </select>
        </div>
        
        <div>
          <input name="save_daily" value={save_daily} disabled />
        </div>
      </form>
      <div className="button-group">
        <Link to="/" className="button-group__next"> Next </Link>
        <Link to="/title" className="button-group__back"> &lt;back </Link>
      </div>
    </div>
  );
};

export default PlanGoal;

PlanGoal.propTypes = {
  // state: ,
  // changeGoal: ,
  // changeSaved ,
  // handleDateChange ,
  step: propTypes.number
};
