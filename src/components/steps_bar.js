import React from 'react';
import cn from 'classnames';
import '../styles/steps_bar.css';
import propTypes from 'prop-types';

const StepsBar = (props) => {
    
  return (
    <div>
      <div className="steps-bar">
        { props.step === 1 &&
          <div className="step-icons">
            <div className="base-style">1</div>
            <div className={cn("base-style", "non-active")}>2</div>
            <div className={cn("base-style", "non-active")}>3</div>
          </div>
        }
        { props.step === 2 &&
          <div className="step-icons">
            <div className={cn("base-style", "active")}><div className="checkmark">L</div></div>
            <div className="base-style">2</div>
            <div className={cn("base-style", "non-active")}>3</div>
          </div>
        }
        { props.step === 3 &&
          <div className="step-icons">
            <div className={cn("base-style", "active")}><div className="checkmark">L</div></div>
            <div className={cn("base-style", "active")}><div className="checkmark">L</div></div>
            <div className={cn("base-style")}>3</div>
          </div>
        }
     
        <svg height="40" width="160">
          { props.step >= 2 
            ? <line x1="15" y1="5" x2="80" y2="5" style={{stroke: "rgb(226,89,135)", strokeWidth: 5}} />
            : <line x1="15" y1="5" x2="80" y2="5" style={{stroke: "rgb(237,237,237)", strokeWidth: 5}} />
          }
          { props.step === 3
            ? <line x1="81" y1="5" x2="150" y2="5" style={{stroke: "rgb(226,89,135)", strokeWidth: 5}} />
            : <line x1="81" y1="5" x2="150" y2="5" style={{stroke: "rgb(237,237,237)", strokeWidth: 5}} />
          }
        </svg>
      </div>
    </div>
  )
} 

export default StepsBar;

StepsBar.propTypes = {
  step: propTypes.number
};
