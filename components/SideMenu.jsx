import React, { Component } from 'react';
import PropTypes from "prop-types";
import slugify from "slugify";
import { NavLink } from 'react-router-dom';
import Scrollbar from "./Scrollbar.jsx";
import queryString from "query-string";

import "../style/SideMenu.scss";

export default class SideMenu extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Scrollbar className="side-menu">
				<NavLink to={{pathname: "/"}}>
					<div className="logo">
						<img src="./style/img/logo.png" />
					</div>
				</NavLink>
				<div className="sections">
					{
						this.props.sections.map((item, index) => {
							return <SideMenuSection key={index} title={item.title} pages={item.pages} />
						})
					}
				</div>
			</Scrollbar>
		);
	}
}

class SideMenuSection extends Component {
	static propTypes = {
		title: PropTypes.string,
		pages: PropTypes.array
	};

	static defaultProps = {
		title: "",
		pages: []
	}

	constructor(props) {
		super(props);
	}

	render() {
		const { props } = this;

		let pageList = null;

		if(props.pages.length) {
			pageList = 
				<ul>
					{
						props.pages.map((item, index) => {
							return <SideMenuPage section={props.title} title={item.title} key={index} />
						})
					}
				</ul>
		};

		return (
			<div className="side-menu-section">
				<h4>{props.title}</h4>
				{pageList}
			</div>
			);
	}
}


class SideMenuPage extends Component {
	static propTypes = {
		section: PropTypes.string,
		title: PropTypes.string
	};

	static defaultProps = {
		section: "",
		title: ""
	};

	constructor(props) {
		super(props);
	}

	isActive = (match, location) => {
		let search = queryString.parse(location.search);
		return search.section == this.props.section && search.page == this.props.title;
	}

	render() {
		const { props } = this;

		return (
			<li>
				<NavLink isActive={this.isActive} to={{pathname: "/event-control/", search: "?section="+props.section+"&page="+props.title}}>
					{props.title}
				</NavLink>
			</li>
		);
	}
}
