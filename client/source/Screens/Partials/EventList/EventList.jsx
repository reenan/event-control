import React, { Component } from 'react';

import { Title, Subtitle, Content } from "screens/Partials/Text/Text.jsx";
import Icon from "screens/Partials/Icon/Icon.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

import "./EventList.scss"
export default class EventList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { list } = this.props;

		return (
			<div className="event-list">
				<ul>
					{
						list.map((item, index) => {
							return <EventListItem key={index} item={item} /> 
						})
					}

				</ul>
			</div>
		);
	}
}

class EventListItem extends Component {
	constructor(props) {
		super(props);
	}

	getDescriptionSize = (text) => {
		if(text.length < 60) {
			return "big";
		} else if(text.length < 110) {
			return "medium";
		} else {
			return "small";
		}
	}

	render() {
		const { item } = this.props;

		let descriptionSize = this.getDescriptionSize(item.description);

		/*
			id: 1,
			title: "Front In Poa",
			description: "O",
			location: "R. Cel. Genúino, 130 - Centro Histórico, Porto Alegre - RS",
			date: "17/09/2017 9hr 30min às 19hr 30min",
			price: "A partir de R$ 250,00",
			flagged: false,
			logo: "",
			mainColor: ""
		*/

		return (
			<li className="event-list-item" style={{backgroundImage: `url(${item.logo})`}}>
				<div className="color-layer" style={{backgroundColor: item.mainColor}} />
				<div className="white-layer" />
				<div className="data">
					<Title tag="h6">
						{ item.title }
					</Title>
					<Content className={`description ${descriptionSize}`}>
						{ item.description }
					</Content>

					<ul className="info">
						<li>
							<Icon size={14} icon="map-marker" />
							<Content>
								{ item.location }
							</Content>
						</li>
						<li>
							<Icon size={14} icon="clock-o" />
							<Content>
								{ item.date }
							</Content>
						</li>
						<li>
							<Icon size={14} icon="dollar" />
							<Content>
								{ item.price }
							</Content>
						</li>
					</ul>
				</div>
			</li>
		);
	}	
}