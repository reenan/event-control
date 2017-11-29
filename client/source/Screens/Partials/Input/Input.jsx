import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.scss";


export class InputText extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		label: '',
		value: '',
		name: '',
		onChange: () => {}
	}

	onChange = (event) => {
		this.props.onChange({name: event.target.name, value: event.target.value});
	}

	render() {
		const { label, value, name } = this.props;

		return (
			<div className='input-wrapper input-text'>
				<label>
					<span className="label">{label}</span>
					<input type="text" name={name} value={value} onChange={this.onChange} />
				</label>
			</div>
		)
	}
}