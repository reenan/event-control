import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal, { ModalHeader, ModalContent, ModalFooter } from "screens/Partials/Modal/Modal.jsx";
import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { InputText } from "screens/Partials/Input/Input.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";


import "./EventModal.scss";
export default class EventModal extends Component {
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

	changeInput = (input) => {
		console.log(input);
	}

	render() {
		return (
			<div>
				<p onClick={this.openModal}>abrir</p>
				<Modal className="event-modal" onClose={this.closeModal} open={true || this.state.openModal}>
					<ModalHeader>
						<Title tag="h2">
							Criação de Evento
						</Title>
						<Subtitle tag="h3">
							Cadastre aqui seu evento
						</Subtitle>
					</ModalHeader>

					<ModalContent>
						<InputText name="teste" label="Label" value="valor" onChange={this.changeInput} />
					</ModalContent>

					<ModalFooter>
						<TextButton text="Cancelar" color="red" />
						<SquareButton text="Salvar" />
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}