import React, { Component } from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

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

	openMenu = () => {
		this.setState({
			openMenu: true
		});
	}

	closeMenu = () => {
		this.setState({
			openMenu: false
		});
	}

	render() {

		const { history } = this.props;
		const { location } = history;
		let title = location.state && location.state.title ? location.state.title : "Renderizando página sem título";

		return (

			<div className="menu">
				<MenuHeader text={title} iconAction={this.openMenu} />
				<SideMenu history={history} open={this.state.openMenu} closeMenu={this.closeMenu} />
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

	logout = () => {
		this.props.closeMenu();
		this.props.history.push("/login");
	}

	render() {

		let menuList = [
			{
				pathname: "meus-eventos",
				info: {
					title: "Meus eventos",
					icon: "pencil"
				}
			},
			{
				pathname: "eventos-destacados",
				info: {
					title: "Destacados",
					icon: "star"
				}
			},
			{
				pathname: "proximos-eventos",
				info: {
					title: "Próximos eventos",
					icon: "bookmark"
				}
			},
			{
				pathname: "historico-eventos",
				info : {
					title: "Histórico",
					icon: "clock-o"
				}
			}
		]

		const { open, closeMenu, history } = this.props;

		return (
			<div className={`side-menu ${open ? 'open' : ''}`}>
				<div className="overlay" onClick={closeMenu} />
				<div className="menu-wrapper">
					<MenuHeader icon="chevron-left" text="Menu" iconAction={closeMenu} />
					<div className="avatar" style={{backgroundImage: `url(${"source/imgs/avatar.jpg"})`}} />
					<ul>
						{
							menuList.map((menuItem, index) => {
								return <MenuItem closeMenu={closeMenu} history={history} key={index.toString()} pathname={menuItem.pathname} item={menuItem.info} />
							})
						}
					</ul>
					<div onClick={this.logout} className="sign-out-wrapper">
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

    closeMenu = () => {
    	this.props.closeMenu();
    }

    render() {
    	const { item, pathname, closeMenu, history } = this.props;

        return (
            <li>
                <NavLink to={{pathname: `/${pathname}`, state: { title: item.title }}} onClick={this.closeMenu} className="content">
                	<Icon size={16} icon={item.icon}/>
                    <Content className="small bold">{item.title}</Content>
                </NavLink>
            </li>
        );
    }
}