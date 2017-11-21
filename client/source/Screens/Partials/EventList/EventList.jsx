import React, { Component } from 'react';

import { Title, Subtitle, Content } from "screens/Partials/Text/Text.jsx";
import Icon from "screens/Partials/Icon/Icon.jsx";
import { TextButton, SquareButton } from "screens/Partials/Button/Button.jsx";

import "./EventList.scss"
export default class EventList extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		list: []
	}

	render() {
		const { list } = this.props;

		return (
			<div id="listComponent" className="event-list">
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