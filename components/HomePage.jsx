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
			<div className="home">
				<div className="logo">
					<img src="./style/img/logo-home.png" />
					<Link to={{pathname: '/event-control/', search: "?section=Introdução&page=Apresentação"}}>
						Saiba Mais
					</Link>
				</div>
			</div>
		);
	}
}
