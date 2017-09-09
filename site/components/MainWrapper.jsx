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
		console.log(this.props.history);
		return (
			<div>
				<SideMenu />

				<Route path="/" render={(route) => {
					let iFrameURL = "";
					
					const { state } = route.location;
					if(state != undefined) {
						iFrameURL = getURL(state.section, state.page);
						
					}

					return (
						<PageContent url={iFrameURL} />
					);
				}} />
			</div>
		);
	}
}



function getURL(section, page) {
	return "../site/sections/"+section+"/"+page+".html";

}