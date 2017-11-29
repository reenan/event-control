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
			eventInfo: {
				title: '',
				description: '',
				location: '',
				date: '',
				price: ''
			}
		}

		this.changeInput.bind(this);
	}

	static defaultProps = {
		saveEvent: () => {}
	}

	componentWillReceiveProps(nextProps) {
		const { activeItem } = nextProps;

		if(activeItem != null) {
			this.setState({
				eventInfo: {
					title: activeItem.title,
					description: activeItem.description,
					location: activeItem.location,
					date: activeItem.date,
					price: activeItem.price
				}
			});
		} else {
			this.setState({
				eventInfo: {
					title: "",
					description: "",
					location: "",
					date: "",
					price: ""
				}
			});
		}
	}

	changeInput = function(info) {
		let obj = Object.assign({}, this.state);
		obj.eventInfo[info.field] = info.value;

		this.setState(obj);
	}

	createEvent = () => {
		if(this.state.activeItem != null) {
			this.props.closeModal();
			return;
		}

		let eventInfo = this.state.eventInfo;

		this.props.saveEvent({
			title: eventInfo.title,
			description: eventInfo.description,
			location: eventInfo.location,
			date: eventInfo.date,
			price: eventInfo.price
		});

		// let body = new Formdate(),
		// 	info = this.state.eventInfo;

        // for(let property in info) {
        //     body.append(property, info[property])
        // }

        // let response = fetch(`${backend.url}/evento`, {
        //     method: "POST",
        //     mode: "no-cors",
        //     body: body
		// });

		// this.props.closeModal();
	}

	render() {
		return (
			<Modal className={this.props.openModal ? 'event-modal': 'close'} onClose={this.props.closeModal} open={this.props.openModal}>
				<ModalHeader>
					<Title tag="h2">
						Criação de Evento
					</Title>
					<Subtitle tag="h3">
						Cadastre aqui seu evento
					</Subtitle>
				</ModalHeader>

				<ModalContent>
					<InputText id="title" value={this.state.eventInfo.title} label="Nome" onChange={this.changeInput} context={this}/>
					<InputText id="description" value={this.state.eventInfo.description} label="Descrição" onChange={this.changeInput} context={this}/>
					<InputText id="location" value={this.state.eventInfo.location} label="Endereço" onChange={this.changeInput} context={this}/>
					<InputText id="date" value={this.state.eventInfo.date} label="date" onChange={this.changeInput} context={this} type="date"/>
					<InputText id="price" value={this.state.eventInfo.price} label="Valor mínimo" onChange={this.changeInput} context={this}/>
				</ModalContent>

				<ModalFooter>
					<TextButton onClick={this.props.closeModal} text="Cancelar" color="red" />
					<SquareButton onClick={this.createEvent} text="Salvar" />
				</ModalFooter>
			</Modal>
		);
	}
}