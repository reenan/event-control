import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Menu.scss"
export default class Menu extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            menuOpen: false
        }
    }
    
    openMenu = () => {
        this.setState({
            menuOpen: true
        });
    }

    closeMenu = () => {
        this.setState({
            menuOpen: false
        });
    }

	render() {
        const { menuOpen } = this.state;

		return (
            <div className="menu-wrapper">
                <span onClick={this.openMenu}>Abrir menu</span>

                <div onClick={this.closeMenu} className={`overlay ${menuOpen ? `show` : ``}`} />
                <div className={`menu ${menuOpen ? `open` : ``}`}>
                    Menu!!
                </div>
            </div>
		);
	}
}