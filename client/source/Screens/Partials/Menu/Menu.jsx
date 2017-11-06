import React, { Component } from 'react';
import PropTypes from "prop-types";

import Icon from "screens/Partials/Icon/Icon.jsx";
import { Content } from "screens/Partials/Text/Text.jsx";

import "./Menu.scss";
export default class Menu extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
	};

	static defaultProps = {
	};

	render() {
		return (
			<div className="menu">
				<MenuHeader text="Página ativa" />
				<SideMenu />
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
		icon: "bars"
	};

	render() {
		return (
			<div className="header">
				<Icon icon={this.props.icon} size={26} />
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

		return (
			<div className="side-menu">
				<div className="overlay" />
				<div className="menu-wrapper">
					<MenuHeader icon="chevron-left" text="Menu" />
				
					<div className="avatar" style={{backgroundImage: `url(${"source/imgs/avatar.jpg"})`}} />
					<ul>
						{
							menuList.map((item, index) => {
								return <MenuItem active={index == 1} key={index} item={item} />
							})
						}
					</ul>
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