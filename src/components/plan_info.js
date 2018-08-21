import React, { Component } from 'react';

class PlanInfo extends Component {

    state = {
        data: null
    }

    render() {
        return (
            <div>
                <div>Hi NAME</div>
                {this.state.data &&
                    <div>
                        <div>Currently in savings: </div>
                        <div>-------bar here--------</div>
                        <div>164£ of 1400£</div>
                        <div>Time left to hit your saving target: </div>
                        <div>8 Aug 1019 </div>
                        <div>DATE 11 mths 22 days 09 hours 54 min</div>
                        <div>11%</div>
                    </div>
                }
                <button>Adjust my goal</button>
            </div>
        )
    }
}

export default PlanInfo;