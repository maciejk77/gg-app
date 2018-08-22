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
        const { goal, saved, date:{day, month, year}, isActive } = this.props;
        //if(!isActive) { return null };
        return (
            <div className="plan__info">
                <div>Hi NAME</div>  
                    <div>
                        <div>Currently in savings: </div>
                        <div>-------bar here--------</div>
                        <div>£{saved} of £{goal}</div>
                        <div>Time left to hit your saving target:</div>
                        <div>{day} {month} {year} ----------fix month format and value</div>
                        <div>DATE 11 mths 22 days 09 hours 54 min</div>
                        { goal   
                          ? <div>{Math.floor((saved/goal)*100)}%</div>
                          : <div>0%</div>
                        } 
                    </div>
                <button onClick={this.handle_click}>Adjust my goal</button>
            </div>
        )
    }
}

export default PlanInfo;