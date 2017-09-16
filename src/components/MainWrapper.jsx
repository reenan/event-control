import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import SideMenu from "./SideMenu.jsx";
import queryString from "query-string";
import Sections from "../../sections/sections.js";

import PageContent from "./PageContent.jsx";
import HomePage from "./HomePage.jsx";

export default class MainWrapper extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<Route exact path="/(#?)" render={(route) => {
					return <Redirect to={{
						pathname: "/event-control"
					}} />
				}} />
			
				<Route path="/event-control/" render={(route) => {
					let { search } = route.location;
					if(search == "") {
						return <HomePage />
					} else {
						let parsedSearch = queryString.parse(search);
						return (
							<div>
								<SideMenu sections={Sections} />
								<PageContent sections={Sections} section={parsedSearch.section} page={parsedSearch.page} />
							</div>
						);
					}
				}} />
			</div>
		);
	}
}