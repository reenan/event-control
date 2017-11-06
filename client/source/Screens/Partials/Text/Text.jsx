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
			<this.props.tag className={`title ${className}`}>
				{children}
			</this.props.tag>
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
			<this.props.tag className={`subtitle ${className}`}>
				{children}
			</this.props.tag>
		)
	}
}

export class Content extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		tag: "p",
		className: ""
	}

	static PropTypes = {
		tag: PropTypes.string,
		className: PropTypes.string
	}

	render() {
		const { className, children } = this.props;
		
		return (
			<this.props.tag className={`content ${className}`}>
				{children}
			</this.props.tag>
		)
	}
}