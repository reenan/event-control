import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Route } from 'react-router';

import SideMenu from "./SideMenu.jsx";

import PageContent from "./PageContent.jsx";

import Sections from "../Sections/sections.js";

export default class MainWrapper extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<SideMenu />
				<Route path="/" render={(route) => {
					let url = "";
					
					const { state } = route.location;
					if(state != undefined) {
						url = getURL(state.section, state.page);
					} else {
						url = "./sections/home.html"
					}

					return (
						<PageContent url={url} history={route} />
					);
				}} />
			</div>
		);
	}
}



function getURL(section, page) {
	return "./sections/"+section+"/"+page+".html";
}