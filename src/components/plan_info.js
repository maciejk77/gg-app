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
        const {day, month, year} = this.props.plan_deadLine; 
        const monthNames = ["Jan", "Feb", "March", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                            ];
                            
        const monthName=new Date(year,month,day);
        const month_Name=monthNames[monthName.getMonth()];          
        return (
            <div className="plan__info">
                <div>Hi NAME</div>
                {this.state.isActive &&
                    <div>
                        <div>Currently in savings: </div>
                        <div>-------bar here--------</div>
                        <div>{this.props.plan_saved}£ of {this.props.plan_goal}£</div>
                        <div>Time left to hit your saving target: </div>
                        <div>{day} {month_Name} {year}</div>
                        <div>DATE 11 mths 22 days 09 hours 54 min</div>
                        <div>{this.props.plan_saving_percent}%</div>
                    </div>
                }
                <button onClick={this.handle_click}>Adjust my goal</button>
            </div>
        )
    }
}

export default PlanInfo;