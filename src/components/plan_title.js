import React, { Component } from  'react';
import '../styles/plan_title.css';

class PlanTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
        this.handle_change = this.handle_change.bind(this)
        this.handle_click = this.handle_click.bind(this)
    }

    handle_change(e) {
        e.preventDefault();
        this.setState({
            term: e.target.value
        });
    }

    handle_click() {
        this.props.get_subtitle(this.state.term)
        this.setState({term: ''})
    }

    render() {
        const { plan_title, plan_subtitle, isActive } = this.props;
        //if(!isActive) { return null };
        return (
            <div className="plan__title">
                <div>Goal name: {plan_title}</div>
                <div>Goal details: {plan_subtitle}</div>
                <input value={this.state.term} onChange={this.handle_change}/>
                <button onClick={this.handle_click}>Next</button>
            </div>
        )
    }

}

export default PlanTitle;