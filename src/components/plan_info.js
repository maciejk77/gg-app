import React, { Component } from "react";
import Countdown from 'react-countdown-to-future-date';
import { Line } from 'rc-progress';
import "../styles/plan_info.css";
import moment from 'moment';
import { Link } from 'react-router-dom';

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
        <div className="plan-info__name">Hi CustomerNameHere</div>
        <div><Link to="/category"> Adjust my goal </Link></div>
        { goal &&
          <div>
            <div>
              { goal 
                  ? <div>{Math.floor((saved / goal) * 100)}%</div>
                  : <div>0%</div>
              }

              <div>Currently in savings: </div>
              <Line percent={Math.floor(saved/goal * 100)} strokeWidth="2" trailWidth="2" strokeColor="pink" />
              <div>£{saved} of £{goal}</div>
              
              <div>Time left to hit your saving target:</div>
              <div>{moment(timeLeft).format('DD MMMM YYYY')}</div>
              <Countdown givenDate = {timeLeft}/>
            
            </div>
          </div>
        }
      </div>
    );
  }
}

export default PlanInfo;
