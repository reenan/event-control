import React, { Component } from 'react';
import PropTypes from "prop-types";

import './Button.scss';
export class Button extends Component {
	static defaultProps = {
		onClick: () => {},
		size: "",
		tagName: "a",
		className: "",
		href: "#",
		tagName: "a",
		style: {}
	};

	static propTypes = {
		onClick: PropTypes.func,
		size: PropTypes.oneOf(["", "small", "medium", "big"]),// "" -> lembre do TextButton?? :)
		tagName: PropTypes.oneOf(["a", "span", "p"]),
		className: PropTypes.string,
		text: PropTypes.string.isRequired,
		href: PropTypes.string,
		style: PropTypes.object
	}

	constructor(props) {
		super(props);
	}

	handleClick = (e) => {
		if (this.props.href === "#") {
			e.preventDefault();
			e.preventDefault();
			this.props.onClick();
		}
	}

}

export class SquareButton extends Button {
	static defaultProps = {
		...Button.defaultProps,
		size: "medium"
	};

	static propTypes = {
		...Button.propTypes,
		size: React.PropTypes.oneOf(["tiny", "small", "medium", "big"]),
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.href} className={`button-wrapper square ${this.props.className} ${this.props.size}`} onClick={this.handleClick}>
				{this.props.text}
			</a>
		);
	}

}

export class GreenButton extends Button {
	static defaultProps = {
		...Button.defaultProps,
		size: "medium"
	};

	static propTypes = {
		...Button.propTypes,
		size: React.PropTypes.oneOf(["slim", "small", "medium", "big"]),
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.href} style={this.props.style} className={`button-wrapper green-button ${this.props.className} ${this.props.size}`} onClick={this.handleClick}>
				{this.props.text}
			</a>
		);
	}

}

export class RedButton extends Button {
	static defaultProps = {
		...Button.defaultProps,
		size: "medium"
	};

	static propTypes = {
		...Button.propTypes,
		size: React.PropTypes.oneOf(["small", "medium", "big"]),
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.href} style={this.props.style} className={`button-wrapper red-button ${this.props.className} ${this.props.size}`} onClick={this.handleClick}>
				{this.props.text}
			</a>
		);
	}

}

export class GhostButton extends Button {

	static defaultProps = {
		...Button.defaultProps,
		size: "medium",
		round: true,
		target: "_self"
	};

	static propTypes = {
		...Button.propTypes,
		size: React.PropTypes.oneOf(["small", "medium"]),
	};

	constructor(props) {
		super(props);
	}

	render() {
		let className = `button-wrapper ghost ${this.props.className} ${this.props.size}`;
		if (this.props.round)
			className += ' round';

		return (
			<this.props.tagName href={this.props.href} target={this.props.target} className={className} onClick={this.handleClick}>
				{this.props.text}
			</this.props.tagName>
		);
	}

}

export class TextButton extends Button {

	static defaultProps = {
		...Button.defaultProps,
		color: 'gray',
		target: '_self'
	};

	static propTypes = {
		...Button.propTypes,
		color: React.PropTypes.oneOf(["gray", "blue", "green", "red"])
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<this.props.tagName href={this.props.href} id={this.props.id} target={this.props.target} style={this.props.style} className={`button-wrapper text-button ${this.props.color} ${this.props.className}`} onClick={this.handleClick}>
				{this.props.text}
			</this.props.tagName>
		);
	}

}


export class IconButton extends Button {
	static defaultProps = {
		...Button.defaultProps,
		color: 'gray',
		onMouseLeave: () => {},
		onMouseEnter: () => {}
	};

	static propTypes = {
		...Button.propTypes,
		color: React.PropTypes.oneOf(["gray", "blue", "green", "red"])
	}

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={this.props.href} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} style={this.props.style} className={`button-wrapper square icon-button ${this.props.color} ${this.props.className} ${this.props.size}`} onClick={this.handleClick}>
				{this.props.children}
				<span className='button-icon-text'>{this.props.text}</span>
			</a>
		)
	}
}