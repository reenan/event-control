import React, { Component } from 'react';
import PropTypes from "prop-types";

import Icon from "screens/Partials/Icon/Icon.jsx";
import { Content } from "screens/Partials/Text/Text.jsx";

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
		return (
			<div className="menu">
				<MenuHeader text="Página ativa" iconAction={this.openMenu} />
				<SideMenu open={this.state.openMenu} closeMenu={this.closeMenu} />
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
				title: "Próximos eventos",
				icon: "bookmark"
			},
			{
				title: "Destacados",
				icon: "star"
			},
			{
				title: "Mapa de eventos",
				icon: "map-marker"
			},
			{
				title: "Meus eventos",
				icon: "pencil"
			},
			{
				title: "Histórico",
				icon: "clock-o"
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
							menuList.map((item, index) => {
								return <MenuItem active={index == 1} key={index} item={item} />
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

class MenuItem extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
	};

	static defaultProps = {
		active: false
	};

	render() {
		return (
			<li className={this.props.active ? 'active' : ''}>
				<Icon size={16} icon={this.props.item.icon} />
				<Content tag="a">
					{this.props.item.title}
				</Content>
			</li>
		);
	}
}