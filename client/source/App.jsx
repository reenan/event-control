import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from "screens/Login/Login.jsx";
import FutureEvents from "screens/FutureEvents/FutureEvents.jsx";
import MyEvents from "screens/MyEvents/MyEvents.jsx";

import Menu from "screens/Partials/Menu/Menu.jsx";

import 'reset-css/reset.css';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="app">


				<Menu history={this.props.history} />

				{/* Aqui é a lista de rotas disponíveis o que cada uma deve renderizar, 
					o componente "Switch" faz renderizara primeira que der match */}
				<Switch>
					{/* Rota sempre slugificada (minúsculo, alfanumérico)*/}
					<Route path="/future-events" component={FutureEvents} />
					<Route path="/my-events" component={MyEvents} />
					<Route path="/login" component={Login} />

					<Route exact path="/" render={() => {
						return <Redirect to="/future-events"/>
					}}/>

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