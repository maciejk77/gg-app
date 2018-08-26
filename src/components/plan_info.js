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
        <div className="plan-info__name">Hi CustomerName</div>
        <div className="plan-info-bottom">
          <div className="plan-info-bottom__left">
            <div className="plan-info-bottom-percentage">
              { goal 
                ? <div>{Math.floor((saved / goal) * 100)}%</div>
                : <div>0%</div>
              }
            </div>
            <Link 
              className="button"
              to="/category"> { goal ? 'Adjust' : 'Set' } my goal 
            </Link>
          </div>
          <div className="plan-info-bottom__right">
            { !goal && 
              <div className="plan-info-bottom-right-text-nogoal">
                <div>See <b>how much</b><br />you need to save daily<br />to <b>reach your goal!</b></div>
              </div>
            }
            { goal &&
              <div>
                <div className="plan-info-bottom-right-text">

                  <div className="plan-info-bottom-right-text__item">Currently in savings: </div>
                  <Line 
                    className="plan-info-bottom-right-text__item"
                    percent={Math.floor(saved/goal * 100)} 
                    strokeWidth="3" 
                    trailWidth="3" 
                    strokeColor="rgb(234,98,144)" 
                  />
                  <div className="plan-info-bottom-right-text__item">
                    <div className="text-bg">£{saved}<span className="text-md"> of £{goal}</span></div>
                  </div>
                  <div className="plan-info-bottom-right-text__item">Time left to hit your saving target:</div>
                  <div className="plan-info-bottom-right-text__item">{moment(timeLeft).format('DD MMMM YYYY')}</div>
                  
                  <Countdown givenDate={timeLeft}/>
                </div>
              </div>
            }
          </div>
        </div>
      </div>    
    );
  }
}

export default PlanInfo;
