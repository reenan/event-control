import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class PageContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { props } = this;

		return (
			<div>
				i'm page content prop {props.title}
				<iframe src={props.url} />
			</div>
		);
	}
}
