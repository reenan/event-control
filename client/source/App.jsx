import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import queryString from "query-string";

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				oi app
				{/*<Route exact path="/(#?)" render={(route) => {
					return <Redirect to={{
						pathname: "/event-control"
					}} />
				}} />*/}
			
				{/*<Route path="/event-control/" render={(route) => {
					let { search } = route.location;
					if(search == "") {
						return <HomePage />
					} else {
						let parsedSearch = queryString.parse(search);
						return (
							<div>
								<SideMenu sections={Sections} />
								<PageContent history={this.props.history} sections={Sections} section={parsedSearch.section} page={parsedSearch.page} />
							</div>
						);
					}
				}} />*/}
			</div>
		);
	}
}