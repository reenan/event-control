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

	createEvent = () => {

	}

	render() {
		return (
			<div>
				<p onClick={this.openModal}>abrir</p>
				<Modal className={this.state.openModal ? 'event-modal': 'close'} onClose={this.closeModal} open={true || this.state.openModal}>
					<ModalHeader>
						<Title tag="h2">
							Criação de Evento
						</Title>
						<Subtitle tag="h3">
							Cadastre aqui seu evento
						</Subtitle>
					</ModalHeader>

					<ModalContent>
						<InputText label="Nome" onChange={this.changeName} />
						<InputText label="Descrição" onChange={this.changeDescription} />
						<InputText label="Endereço" onChange={this.changeAddress} />
						<InputText label="Data" onChange={this.changeDate} />
						<InputText label="Horário" onChange={this.changeDateTime} />
						<InputText label="Valor mínimo" onChange={this.changeValue} />
					</ModalContent>

					<ModalFooter>
						<TextButton onClick={this.closeModal} text="Cancelar" color="red" />
						<SquareButton onClick={this.createEvent} text="Salvar" />
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}