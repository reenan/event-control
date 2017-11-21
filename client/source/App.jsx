import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import queryString from "query-string";


import Modal, { ModalHeader, ModalContent, ModalFooter } from "screens/Partials/Modal/Modal.jsx";
import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

import Login from "screens/Login/Login.jsx";

import FutureEvents from "screens/FutureEvents/FutureEvents.jsx";

import Menu from "screens/Partials/Menu/Menu.jsx";

import 'reset-css/reset.css';

export default class App extends Component {
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

	render() {

		return (
			<div className="app">
				<Menu />

				{/* Aqui é a lista de rotas disponíveis o que cada uma deve renderizar, 
					o componente "Switch" faz renderizara primeira que der match */}
				<Switch>
					{/* Rota sempre slugificada (minúsculo, alfanumérico)*/}
					<Route path="/future-events" component={FutureEvents} />
					<Route path="/login" component={Login} />
				</Switch>


				{/* <EventList list={fakeList} /> */}
				{/*<Login />*/}

				{/*<p onClick={this.openModal}>abrir</p>
				<Modal onClose={this.closeModal} open={this.state.openModal}>
					<ModalHeader>
						<Title tag="h2">
							Título
						</Title>
						<Subtitle tag="h3">
							Subtítulo
						</Subtitle>
					</ModalHeader>

					<ModalContent>
						aqui o conteúdo de verdade
					</ModalContent>

					<ModalFooter>
						<TextButton text="Cancelar" color="red" />
						<SquareButton text="Salvar" />
					</ModalFooter>
				</Modal>*/}
			</div>
		);
	}
}