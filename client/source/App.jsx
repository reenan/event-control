import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import queryString from "query-string";


import Menu from "screens/Home/Partials/Menu/Menu.jsx";

import Modal, { ModalHeader, ModalContent, ModalFooter } from "screens/Partials/Modal/Modal.jsx";
import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

import Login from "screens/Login/Login.jsx";

import FutureEvents from "screens/Home/Partials/Menu/Partials/FutureEvents/FutureEvents.jsx";

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

				<Route path="/" component={Menu} />
				<Route path="/futureEvents" component={FutureEvents} />
				<Route path="/login" component={Login} />

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