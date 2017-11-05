import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import queryString from "query-string";


import Modal from "screens/Partials/Modal/Modal.jsx";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openModal: false
		}
	}

	openModal = () => {
		this.setState({
			openModal: true 
		});
	}

	closeModal = () => {
		this.setState({
			openModal: false 
		});
	}

	render() {
		return (
			<div className="app">
				<p onClick={this.openModal}>abrir</p>
				
				<Modal onClose={this.closeModal} open={this.state.openModal} />
				
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