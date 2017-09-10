import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';

import { Scrollbars } from 'react-custom-scrollbars';

import "../style/Scrollbar.scss";

export default class Scrollbar extends Component {
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		onScroll: PropTypes.func,
		onScrollFrame: PropTypes.func,
		onScrollStart: PropTypes.func,
		onUpdate: PropTypes.func,
		hideTracksWhenNotNeeded: PropTypes.bool,
		thumbMinSize: PropTypes.number,
		autoHide: PropTypes.bool,
		autoHideTimeout: PropTypes.number,
		autoHideDuration: PropTypes.number,
		autoHeight: PropTypes.bool,
		autoHeightMin: PropTypes.number,
		autoHeightMax: PropTypes.number,
		universal: PropTypes.bool
	};

	static defaultProps = {
		className: "",
		style: {},
		onScroll: () => {},
		onScrollFrame: () => {},
		onScrollStart: () => {},
		onUpdate: () => {},
		hideTracksWhenNotNeeded: true,
		thumbMinSize: 30,
		autoHide: false,
		autoHideTimeout: 1000,
		autoHideDuration: 200,
		autoHeight: false,
		autoHeightMin: 0,
		autoHeightMax: 200,
		universal: false
	};

	constructor(props) {
		super(props);
	}

	render() {
		let props = this.props;
		props = update(props, {className: {$set: 'scrollbar-wrapper ' + props.className}});

		return (
			<Scrollbars {...props}>
				{this.props.children}
			</Scrollbars>
		);
	}
}