import React from "react";
import propTypes from "prop-types";

const StepsBar = ({ step }) => {
  const markup = Array(3)
    .fill()
    .map((_, i) => {
      return (
        <div
          className={[
            "base-style",
            i + 1 > step ? "non-active" : i + 1 < step ? "active" : ""
          ].join(" ")}
        >
          {i + 1 >= step ? i + 1 : <div className="checkmark">L</div>}
        </div>
      );
    });
  return (
    <div>
      <div className="steps-bar">
        <div className="step-icons">{markup}</div>

        <svg height="40" width="300">
          {step === 2 ? (
            <line
              x1="0"
              y1="5"
              x2="150"
              y2="5"
              style={{ stroke: "rgb(226,89,135)", strokeWidth: 3 }}
            />
          ) : (
            <line
              x1="0"
              y1="5"
              x2="150"
              y2="5"
              style={{ stroke: "rgb(237,237,237)", strokeWidth: 3 }}
            />
          )}
          {step === 3 ? (
            <line
              x1="0"
              y1="5"
              x2="300"
              y2="5"
              style={{ stroke: "rgb(226,89,135)", strokeWidth: 3 }}
            />
          ) : (
            <line
              x1="150"
              y1="5"
              x2="300"
              y2="5"
              style={{ stroke: "rgb(237,237,237)", strokeWidth: 3 }}
            />
          )}
        </svg>
      </div>
    </div>
  );
};

StepsBar.propTypes = {
  step: propTypes.number
};

export default StepsBar;
