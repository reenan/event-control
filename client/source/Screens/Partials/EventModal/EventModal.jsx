import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal, { ModalHeader, ModalContent, ModalFooter } from "screens/Partials/Modal/Modal.jsx";
import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { InputText } from "screens/Partials/Input/Input.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

const backend = {
    url: "http://localhost:8000/api/v1",
} 

import "./EventModal.scss";
export default class EventModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openModal: false,
			eventInfo: {
				nome: '',
				descricao: '',
				endereco: '',
				data: '',
				horario: '',
				valorMinimo: ''
			}
		}

		this.changeInput.bind(this);
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

	changeInput = function(info) {
		let obj = Object.assign({}, this.state);
		obj.eventInfo[info.field] = info.value;

		this.setState(obj);
	}

	createEvent = () => {
		let body = new FormData(),
			info = this.state.eventInfo;
        
        for(let property in info) {
            body.append(property, info[property])
        }
        
        let response = fetch(`${backend.url}/evento`, {
            method: "POST",        
            mode: "no-cors",
            body: body
		});
		
		this.closeModal();
	}

	render() {
		return (
			<div className="createEventButton">
				<p className="p" onClick={this.openModal}>+</p>
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
						<InputText id="nome" value={this.state.eventInfo.nome} label="Nome" onChange={this.changeInput} context={this}/>
						<InputText id="descricao" value={this.state.eventInfo.descricao} label="Descrição" onChange={this.changeInput} context={this}/>
						<InputText id="endereco" value={this.state.eventInfo.endereco} label="Endereço" onChange={this.changeInput} context={this}/>
						<InputText id="data" value={this.state.eventInfo.data} label="Data" onChange={this.changeInput} context={this} type="date"/>
						<InputText id="horario" value={this.state.eventInfo.horario} label="Horário" onChange={this.changeInput} context={this} type="time"/>
						<InputText id="valorMinimo" value={this.state.eventInfo.valorMinimo} label="Valor mínimo" onChange={this.changeInput} context={this}/>
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