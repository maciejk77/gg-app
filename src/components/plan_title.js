import React, { Component } from  'react';
import '../styles/plan_title.css';
import { Link } from 'react-router-dom';
import StepsBar from './steps_bar';
import propTypes from 'prop-types';

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
        <StepsBar step={this.props.step}/>
        <div>Goal name: {plan_title}</div>
        <div>Goal details: {plan_subtitle}</div>
        <input value={this.state.term} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Save</button>
        <div className="button-group">
          <Link to="/goals" className="button-group__next"> Next </Link>
          <Link to="/category" className="button-group__back"> &lt;back </Link>
        </div>
      </div>
    )
  }
}

PlanTitle.propTypes = {
  // plan_title: ,
  // plan_subtitle: ,
  // getSubtitle: ,
  step: propTypes.number
};

export default PlanTitle;