import React, { Component } from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

class PlanItem extends Component {

	render() {
		const { goal, source, id, selected } = this.props;
		let activeClass = (selected ? 'plan-item--active' : 'plan-item--nonactive');
		return (
			<div className={`plan-item ${activeClass}`} data-id={id} onClick={this.props.handle_click}>
				<img className="plan-item__image" src={`/images/${source}.png`} style={{ width: "40%" }} alt="" />
				{goal}
			</div>
		)
	}
}

export default PlanItem;

PlanItem.propTypes = {
	goal: propTypes.string,
	source: propTypes.string,
	getTitle: propTypes.func,
	id: propTypes.number
};
