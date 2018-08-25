import React, { Component } from "react";

import Countdown from 'react-countdown-to-future-date';
import "../styles/plan_info.css";

class PlanInfo extends Component {

  render() {
    const {
      goal,
      saved,
      date: { day, month, year },
    } = this.props;

    const timeLeft = new Date(year, month, parseInt(day, 10) + 1).getTime();
    
    return (
      <div className="plan-info">
        <div>Hello Customer</div>
        { goal &&
          <div>
            <div>Currently in savings: </div>
            <div>-------bar here--------</div>
            <div>
              £{saved} of £{goal}
            </div>
            <div>Time left to hit your saving target:</div>
            <div>
              {day} {parseInt(month, 10) + 1} {year} ----------fix month format and value
            </div>
            <div>DATE 11 mths 22 days 09 hours 54 min</div>
            <Countdown givenDate = {timeLeft}/>
            { goal 
                ? <div>{Math.floor((saved / goal) * 100)}%</div>
                : <div>0%</div>
            }
          </div>
        }
      </div>
    );
  }
}

export default PlanInfo;
