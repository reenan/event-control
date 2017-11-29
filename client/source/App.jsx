import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from "screens/Login/Login.jsx";
import FutureEvents from "screens/FutureEvents/FutureEvents.jsx";
import MyEvents from "screens/MyEvents/MyEvents.jsx";
import MarkedEvents from "screens/MarkedEvents/MarkedEvents.jsx";
import HistoryEvents from "screens/HistoryEvents/HistoryEvents.jsx";

import Menu from "screens/Partials/Menu/Menu.jsx";

import 'reset-css/reset.css';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="app">

				<Route exact path="/" render={() => {
					return <Redirect to="/login"/>
				}}/>

				<Route path="/login" component={Login} />

				<Menu history={this.props.history} />

				{/* Aqui é a lista de rotas disponíveis o que cada uma deve renderizar,
					o componente "Switch" faz renderizara primeira que der match */}
				<Switch>
					{/* Rota sempre slugificada (minúsculo, alfanumérico)*/}
					<Route path="/meus-eventos" component={MyEvents} />
					<Route path="/eventos-destacados" component={MarkedEvents} />
					<Route path="/proximos-eventos" component={FutureEvents} />
					<Route path="/historico-eventos" component={HistoryEvents} />


				{/*
					Exemplo de redirect: rota "/" return um redirect para "/login"
					<Route path="/" render={() => {
							return <Redirect to="/login" />
					}} />
				*/}

				</Switch>

			</div>
		);
	}
}