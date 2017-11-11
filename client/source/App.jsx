import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import queryString from "query-string";


import Menu from "screens/Partials/Menu/Menu.jsx";

import Modal, { ModalHeader, ModalContent, ModalFooter } from "screens/Partials/Modal/Modal.jsx";
import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

import Login from "screens/Login/Login.jsx";

import EventList from "screens/Partials/EventList/EventList.jsx";

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

		let fakeList = [

			{
				id: 1,
				title: "Front In Poa",
				description: "O sit voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa evento que consagra designers e desenvolvedores da web. Sed ut perspiciatis unde omnis iste natus error sit sit voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa quae ab illo inventore veritatis etaudantium voluptatem lorem ipsum",
				location: "R. Cel. Genúino, 130 - Centro Histórico, Porto Alegre - RS",
				date: "17/09/2017 9hr 30min às 19hr 30min",
				price: "A partir de R$ 250,00",
				flagged: false,
				logo: "source/imgs/logo-frontinpoa.png",
				mainColor: "#e63c82"
			},
			{
				id: 2,
				title: "BrazilJS",
				description: "A maior conferência de JavaScript do mundo!",
				location: "Av. Diário de Notícias, 300 - Cristal, Porto Alegre - RS",
				date: "17/09/2017 9hr 30min às 19hr 30min",
				price: "Gratuito",
				flagged: true,
				logo: "source/imgs/logo-braziljs.png",
				mainColor: "#ffde17"
			},
			{
				id: 3,
				title: "AWS Experience",
				description: "O principal objetivo principal objetivo principal objetivo do AWS Experience é possibilitar.",
				location: "Av. Diário de Notícias, 300 - Cristal, Porto Alegre - RS",
				date: "17/09/2017 9hr 30min às 19hr 30min",
				price: "R$ 100,00",
				flagged: false,
				logo: "source/imgs/logo-aws.png",
				mainColor: "#f79025"
			}
		]


		return (
			<div className="app">

				<Route path="/" render={(route) => {
					return <Login />
				}} />

				<Route path="/home" render={(route) => {
					return <Menu />
				}} />


				{/*<EventList list={fakeList} />*/}
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