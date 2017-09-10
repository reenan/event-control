import React, { Component } from 'react';
import PropTypes from "prop-types";
import Scrollbar from "./Scrollbar.jsx";

import "../style/PageContent.scss";

import API from "../API.js";
const request = new API();

export default class PageContent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			content: "",
			section: "",
			page: ""
		}
	}

	componentDidMount() {
		this.updateData(this.props.url);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.url != this.props.url) {
			this.updateData(nextProps.url);			
		}
	}

	updateData = (url) => {
		request.get(url, {

			onSuccess: (response) => {
				let section = "Bem-vindo";
				let page = "";

				let locationState = this.props.history.location.state;
				if(locationState) {
					if(locationState.section) {
						section = locationState.section;
					}
	
					if(locationState.page) {
						page = locationState.page;
					}
				}

				this.refs.scroll.scrollTop(0);

				this.setState({
					loading: false,
					content: response.text,
					section: section,
					page: page
				});
			}
		})
	}

	render() {
		const { props, state } = this;
		const { history } = props;
		const { content, section, page } = state;

		let contentHTML = {
			__html: content
		};

		return (
			<Scrollbar ref="scroll" className="page-content">
				<div className="text-content">
					<div className="page-header">
						<h2>{section}</h2>
						{
							page ?
								<h3>{page}</h3> : null
						}
					</div>
					<div dangerouslySetInnerHTML={contentHTML} />
				</div>
			</Scrollbar>
		);
	}
}
