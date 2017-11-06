import React, { Component } from 'react';
import ReactUpdate from "react-addons-update";
import PropTypes from "prop-types";

import "./Icon.scss";
export default class Icon extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
		size: PropTypes.number,
		className: PropTypes.string,
		style: PropTypes.object,
		icon: PropTypes.string.isRequired,
		color: PropTypes.string,

		onClick: PropTypes.func,
		onMouseLeave: PropTypes.func,
		onMouseDown: PropTypes.func,
		onMouseEnter: PropTypes.func
	};

	static defaultProps = {
		className: "",
		color: "",
		size: 18,
		style: {},
		onClick: () => {},
		onMouseLeave: () => {},
		onMouseDown: () => {},
		onMouseEnter: () => {},
	};

	render() {

		let style = ReactUpdate(this.props.style, {
			$merge: {
				fontSize: this.props.size + "px"
			}
		});

		return (
			<i
				className={`icon-component fa fa-${this.props.icon} ${this.props.className} ${this.props.color}`}
				style={style}
				onClick={this.props.onClick}
				onMouseDown={this.props.onMouseDown}
				onMouseEnter={this.props.onMouseEnter}
				onMouseLeave={this.props.onMouseLeave}
			/>
		);
	}
}
