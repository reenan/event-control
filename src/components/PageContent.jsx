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
			loading: true
		}
	}

	componentDidMount() {
		this.updateData(this.props.section, this.props.page);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.section != this.props.section || nextProps.page != this.props.page) {
			this.updateData(nextProps.section, nextProps.page);
		}
	}

	updateData = (section, page) => {
		let sectionObject = this.props.sections.filter((item) => { 
			return item.title == section;
		})[0];

		let sectionPath = sectionObject.path;
		
		let pagePath = sectionObject.pages.filter((item) => {
			return item.title == page;
		})[0].path;

		this.setState({
			loading: true 
		}, () => {
			console.log(this.props.history);
			let promise = request.get("../../sections/"+sectionPath+"/"+pagePath+".html");
		
			promise.then((response) => {
				this.refs.scroll.scrollTop(0);

				this.setState({
					content: response.text,
					loading: false
				});
			})
		});
	}

	render() {
		const { props, state } = this;
		const { section, page } = props;
		const { content, loading } = state;

		let contentHTML = {
			__html: content
		};

		return (
			<Scrollbar ref="scroll" className="page-content">
				{
					loading ? 
					<div className="loader-wrapper">
						<div className="loader" />
					</div> : null
				}
				<div className="content-wrapper">
					<div className="page-header">
						<div>
							<h3>{section}</h3>
							<h2>{page}</h2>
						</div>
					</div>
					<div className="content-text" dangerouslySetInnerHTML={contentHTML} />
				</div>
			</Scrollbar>
		);
	}
}
