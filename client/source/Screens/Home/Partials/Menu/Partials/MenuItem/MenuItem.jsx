import React, { Component } from 'react';

import Icon from "screens/Partials/Icon/Icon.jsx";
import { Content } from "screens/Partials/Text/Text.jsx";
import { NavLink } from 'react-router-dom';
import "./MenuItem.scss";

export default class MenuItem extends Component {
    
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
            <li>
                <Icon size={16} icon={this.props.item.icon}/>
                <NavLink to={`/${this.props.route}`} className="content">
                    {this.props.item.title}
                </NavLink>
                {/* <Content tag="a">
                    {this.props.item.title}
                </Content> */}
            </li>
        );
    }
}