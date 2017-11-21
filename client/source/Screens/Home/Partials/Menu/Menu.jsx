import React, { Component } from 'react';
import PropTypes from "prop-types";

import Icon from "screens/Partials/Icon/Icon.jsx";
import { Content } from "screens/Partials/Text/Text.jsx";
import FutureEvents from "screens/Home/Partials/Menu/Partials/FutureEvents/FutureEvents.jsx";

import MenuItem from "./Partials/MenuItem/MenuItem.jsx";

import "./Menu.scss";
export default class Menu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			openMenu: false
		}
	}

	static propTypes = {
	};

	static defaultProps = {
	};

	openMenu = () => {
		this.setState({
			openMenu: true 
		});
	}

	closeMenu = () => {
		console.log("closeMenu");
		this.setState({
			openMenu: false 
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
			
			<div className="menu">
				<MenuHeader text="Página ativa" iconAction={this.openMenu} />
				<SideMenu open={this.state.openMenu} closeMenu={this.closeMenu} />
				{/* <FutureEvents/> */}
			</div>
		);
	}
}

class MenuHeader extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
	};

	static defaultProps = {
		icon: "bars",
		iconAction: () => {}
	};

	render() {
		return (
			<div className="header">
				<Icon icon={this.props.icon} size={26} onClick={this.props.iconAction} />
				<Content>{this.props.text}</Content>
			</div>
		);
	}
}


class SideMenu extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
	};

	static defaultProps = {
		open: false
	};

	render() {

		let menuList = [
			{
				route: "futureEvents",
				info: {
					title: "Próximos eventos",
					icon: "bookmark"
				}
			},
			{
				route: "destaque",
				info: {
					title: "Destacados",
					icon: "star"
				}
			},
			{
				route: "mapa",
				info: {
					title: "Mapa de eventos",
					icon: "map-marker"
				}
			},
			{
				route: "meus",
				info: {
					title: "Meus eventos",
					icon: "pencil"
				}
			},
			{
				route: "historico",
				info : {
					title: "Histórico",
					icon: "clock-o"
				}
			}
		]

		const { open, closeMenu } = this.props;

		return (
			<div className={`side-menu ${open ? 'open' : ''}`}>
				<div className="overlay" onClick={closeMenu} />
				<div className="menu-wrapper">
					<MenuHeader icon="chevron-left" text="Menu" iconAction={closeMenu} />
				
					<div className="avatar" style={{backgroundImage: `url(${"source/imgs/avatar.jpg"})`}} />
					<ul>
						{
							menuList.map((menuItem, index) => {
								return <MenuItem key={index.toString()} route={menuItem.route} item={menuItem.info} />
							})
						}
					</ul>
					<div className="sign-out-wrapper">
						<Icon icon="sign-out" />
						<Content>Sair</Content>
					</div>
				</div>
			</div>
		);
	}
}