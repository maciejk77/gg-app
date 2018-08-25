import React from "react";
import "../styles/plan_goal.css"

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
    </div>
  );
};

export default PlanGoal;
