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
		const { overlay, open } = this.props;

		return (
			<div className={`modal ${open ? 'open' : ''} ${overlay ? 'overlay' : ''}`}>
				{
					overlay ?
						<div onClick={this.close} className={`overlay`} /> : null
 				}

				<div className="modal-inner">
					<div className="modal-content-area">
						aqui conteúdo de verdade
					</div>
				</div>
			</div>
		);
	}
}