import React, { Component } from "react";
import Countdown from 'react-countdown-to-future-date';
import { Line } from 'rc-progress';
import "../styles/plan_info.css";
import moment from 'moment';

class PlanInfo extends Component {

  render() {
    const {
      goal,
      saved,
      date: { day, month, year },
    } = this.props;

    const timeLeft = new Date(year, month, day).getTime();

    return (
      <div className="plan-info">
        <div>Hi CustomerNameHere</div>
        { goal &&
          <div>
            <div>Currently in savings: </div>
            <div>
              <Line percent={Math.floor(saved/goal * 100)} strokeWidth="2" trailWidth="2" strokeColor="pink" />
            </div>
            <div>
              £{saved} of £{goal}
            </div>
            <div>Time left to hit your saving target:</div>
            <div>
              {moment(timeLeft).format('DD MMMM YYYY')}
            </div>
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
