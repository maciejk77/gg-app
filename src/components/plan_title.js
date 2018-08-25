import React, { Component } from  'react';
import '../styles/plan_title.css';

class PlanTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      term: e.target.value
    });
  }

  handleClick() {
    this.props.getSubtitle(this.state.term)
    this.setState({term: ''})
  }

  render() {
    const { plan_title, plan_subtitle } = this.props;
    return (
      <div className="plan__title">
        <div>Goal name: {plan_title}</div>
        <div>Goal details: {plan_subtitle}</div>
        <input value={this.state.term} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Next</button>
      </div>
    )
  }
}

export default PlanTitle;