import React, { Component } from 'react';
import '../styles/plan_info.css';

class PlanInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
        this.handle_click = this.handle_click.bind(this);
    }
   
    handle_click() {
        this.setState(prevState => ({
            isActive: !prevState.isActive
          }));
    }

    render() {
        return (
            <div className="plan__info">
                <div>Hi NAME</div>
                {this.state.isActive &&
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
                <button onClick={this.handle_click}>Adjust my goal</button>
            </div>
        )
    }
}

export default PlanInfo;