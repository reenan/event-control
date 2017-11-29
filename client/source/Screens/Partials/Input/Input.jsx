import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.scss";


export class InputText extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		id: '',
		label: '',
		value: '',
		name: '',
		onChange: () => {},
		context: this,
		type: "text"
	}

	onChange = (event) => {
		this.props.onChange.call(this.props.context, {field: this.props.id, value: event.target.value});
	}

	render() {
		const { label, value, name, type } = this.props;

		return (
			<div id={this.props.id} className='input-wrapper input-text'>
				<label>
					<span className="label">{label}</span>
					<input type={type} name={name} value={value} onChange={this.onChange} placeholder={value} />
				</label>
			</div>
		)
	}
}