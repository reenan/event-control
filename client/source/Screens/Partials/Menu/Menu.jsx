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
				pathname: "future-events",
				info: {
					title: "Próximos eventos",
					icon: "bookmark"
				}
			},
			{
				pathname: "destaque",
				info: {
					title: "Destacados",
					icon: "star"
				}
			},
			{
				pathname: "mapa",
				info: {
					title: "Mapa de eventos",
					icon: "map-marker"
				}
			},
			{
				pathname: "meus",
				info: {
					title: "Meus eventos",
					icon: "pencil"
				}
			},
			{
				pathname: "historico",
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
								return <MenuItem key={index.toString()} pathname={menuItem.pathname} item={menuItem.info} />
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

    render() {
    	const { item, pathname } = this.props;

        return (
            <li>
                <NavLink to={`/${pathname}`} className="content">
                	<Icon size={16} icon={item.icon}/>
                    <Content className="small bold">{item.title}</Content>
                </NavLink>
            </li>
        );
    }
}