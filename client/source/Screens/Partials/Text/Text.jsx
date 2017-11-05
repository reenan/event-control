import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Text.scss";

export class Title extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		tag: "h1",
		className: ""
	}

	static PropTypes = {
		tag: PropTypes.string,
		className: PropTypes.string
	}

	render() {
		const { className, children } = this.props;
		
		return (
			<tag className={`title ${className}`}>
				{children}
			</tag>
		)
	}
}

export class Subtitle extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		tag: "h2",
		className: ""
	}

	static PropTypes = {
		tag: PropTypes.string,
		className: PropTypes.string
	}

	render() {
		const { className, children } = this.props;
		
		return (
			<tag className={`subtitle ${className}`}>
				{children}
			</tag>
		)
	}
}