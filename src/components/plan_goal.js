import React from "react";
import { Link } from "react-router-dom";
import StepsBar from "./steps_bar";
import propTypes from "prop-types";

const PlanGoal = ({
  state: {
    goal,
    saved,
    save_daily,
    date: { day, month, year }
  },
  step,
  changeGoal,
  changeSaved,
  handleDateChange
}) => {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
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
      <StepsBar step={step} />
      <h3 className="plan-goal__title">Set your goal</h3>
      <form className="goal-form">
        <div className="goal-form__element">
          <input type="number" value={goal} onChange={changeGoal} />
          <label>Total amount to save</label>
        </div>

        <div className="goal-form__element goal-form__element--flex">
          <div>
            <select
              className="goal-form__select"
              name="day"
              value={day}
              onChange={handleDateChange}
            >
              {days}
            </select>

            <select
              className="goal-form__select"
              name="month"
              value={month}
              onChange={handleDateChange}
            >
              {months}
            </select>

            <select
              className="goal-form__select"
              name="year"
              value={year}
              onChange={handleDateChange}
            >
              {years}
            </select>
          </div>
          <label>Saved by</label>
        </div>

        <div className="goal-form__element">
          <input type="number" value={saved} onChange={changeSaved} />
          <label>Amount saved so far</label>
        </div>

        <div className="goal-form__element">
          <input className="save_daily" value={save_daily} disabled />
          <label>Saving needed per day</label>
        </div>
      </form>
      <div className="button-group">
        <Link to="/" className="button-group__next">
          {" "}
          Save my goal{" "}
        </Link>
        <Link to="/title" className="button-group__back">
          {" "}
          &lt;back{" "}
        </Link>
      </div>
    </div>
  );
};

export default PlanGoal;

PlanGoal.propTypes = {
  state: propTypes.object,
  changeGoal: propTypes.func,
  changeSaved: propTypes.func,
  handleDateChange: propTypes.func,
  step: propTypes.number
};
