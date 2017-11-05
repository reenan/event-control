import React, { Component } from 'react';

import { Title, Subtitle } from "screens/Partials/Text/Text.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

import "./Login.scss"
export default class Login extends Component {
	constructor(props) {
		super(props);
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
						<li className="facebook" />
						<li className="twitter" />
						<li className="gplus" />
					</ul>
				</div>


				<p className="use-terms">
					Ao me nscrever eu estou aceitando os <a href="#">termos de uso</a> e <a href="#">política de privacidade</a>
				</p>
			</div>
		);
	}
}