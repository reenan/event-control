import React, { Component } from 'react';

import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";
//import FacebookLogin from "./Partials/FacebookLogin.jsx"

import "./Login.scss"
export default class Login extends Component {
	constructor(props) {
		super(props);
	}

	login = () => {
		this.props.history.push({pathname: `/meus-eventos`, state: { title: "Meus eventos" }});
	}

	render() {
		return (
			<div className="login">
				<div className="logo">
					<span className="img" />
					<h1>EVENT <span>CONTROL</span></h1>
				</div>

				<div className="social-login">
					<p>connect with</p>

					<ul>
						<li onClick={this.login} className="facebook" />
						<li onClick={this.login} className="twitter" />
						<li onClick={this.login} className="gplus" />
					</ul>
				</div>


				<p className="use-terms">
					Ao me inscrever eu estou aceitando os <a href="#">termos de uso</a> e <a href="#">política de privacidade</a>
				</p>
			</div>
		);
	}
}