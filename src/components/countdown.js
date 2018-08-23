import React, { Component } from "react";
import moment from "moment";

class Countdown extends Component {
  render() {
    const future = moment("2016-06-06T21:03:55"); //now
    const start = moment("2016-05-06T20:03:55");

    return (
      <div>
        <div>
          {moment(future - start).format(
            "M[ month(s) ] D[ day(s)] H[ hour(s)] m[ minute(s)] s[ second(s) ]"
          )}
        </div>
      </div>
    );
  }
}
export default Countdown;
