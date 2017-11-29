import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal, { ModalHeader, ModalContent, ModalFooter } from "screens/Partials/Modal/Modal.jsx";
import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { InputText } from "screens/Partials/Input/Input.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

const backend = {
    url: "http://localhost:8000/api/v1/evento",
}

import "./EventModal.scss";
export default class EventModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventInfo: {
				nome: '',
				descricao: '',
				endereco: '',
				data_fim: '',
				valor: ''
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
					id: activeItem.id,
					nome: activeItem.nome,
					descricao: activeItem.descricao,
					endereco: activeItem.endereco,
					data_fim: activeItem.data_fim,
					valor: activeItem.valor
				}
			});
		} else {
			this.setState({
				eventInfo: {
					id: null,
					nome: "",
					descricao: "",
					endereco: "",
					data_fim: "",
					valor: ""
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
		let { eventInfo } = this.state;

		if(eventInfo.id != null) {

            $.ajax({
                url: `${backend.url}/${eventInfo.id}`,
                method: "PUT",
                data: {
                    nome: eventInfo.nome,
                    descricao: eventInfo.descricao,
                    endereco: eventInfo.endereco,
                    data_fim: eventInfo.data_fim,
                    valor: eventInfo.valor
                },

                success: (response) => {
                    this.props.closeModal();
                }
            })

			this.props.closeModal();
			return;
		}

		$.ajax({
			url: backend.url,
			method: "POST",
			data: {
				nome: eventInfo.nome,
				descricao: eventInfo.descricao,
				endereco: eventInfo.endereco,
				data_fim: eventInfo.data_fim,
				valor: eventInfo.valor
			},

			success: (response) => {
				this.props.closeModal();
			}
		})
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
					<InputText required id="nome" value={this.state.eventInfo.nome} label="Nome" onChange={this.changeInput} context={this}/>
					<InputText id="descricao" value={this.state.eventInfo.descricao} label="Descrição" onChange={this.changeInput} context={this}/>
					<InputText required id="endereco" value={this.state.eventInfo.endereco} label="Endereço" onChange={this.changeInput} context={this}/>
					<InputText required id="data_fim" value={this.state.eventInfo.data_fim} label="Data" onChange={this.changeInput} context={this} type="data_fim"/>
					<InputText required id="valor" value={this.state.eventInfo.valor} label="Valor" onChange={this.changeInput} context={this}/>
				</ModalContent>

				<ModalFooter>
					<TextButton onClick={this.props.closeModal} text="Cancelar" color="red" />
					<SquareButton onClick={this.createEvent} text="Salvar" />
				</ModalFooter>
			</Modal>
		);
	}
}