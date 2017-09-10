import React, { Component } from 'react';
import PropTypes from "prop-types";
import Scrollbar from "./Scrollbar.jsx";
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Scrollbar >
				oiii sou home

				<Link to={{pathname: '/event-control/', search: "?section=Introdução&page=Apresentação"}}>
					GO!
				</Link>
			</Scrollbar>
		);
	}
}
