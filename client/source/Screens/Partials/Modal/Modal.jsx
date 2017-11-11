import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Modal.scss";
export default class Modal extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		overlay: true,
		open: false
	}

	close = () => {
		this.props.onClose();
	}

	render() {
		const { overlay, open, children } = this.props;

		return (
			<div className={`modal ${open ? 'open' : ''} ${overlay ? 'overlay' : ''}`}>
				{
					overlay ?
						<div onClick={this.close} className={`overlay`} /> : null
 				}

				<div className="modal-inner">
					<div className="modal-content-area">
						{children}
					</div>
				</div>
			</div>
		);
	}
}

export class ModalHeader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children } = this.props;

		return (
			<div className="modal-header">
				{children}
			</div>
		)
	}
}

export class ModalContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children } = this.props;
		
		return (
			<div className="modal-content">
				{children}
			</div>
		)
	}
}

export class ModalFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children } = this.props;
		
		return (
			<div className="modal-footer">
				<div>
					{children}
				</div>
			</div>
		)
	}
}
