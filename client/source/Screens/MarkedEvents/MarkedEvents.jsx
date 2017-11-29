import React, { Component } from 'react';
import EventList from 'screens/Partials/EventList/EventList.jsx';

const backend = {
    url: "http://localhost:8000/api/v1",
}

export default class MarkedEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        this.requestItems();
    }

    setItems = (items) => {
        this.setState({
            items: items
        });
    }

    requestItems = () => {
        let fakeList = [
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
            }
        ]

        this.setItems(fakeList);
        return;
        /*fetch(`${backend.url}/evento`, {
            mode: "no-cors",
            success: (items) => {
                this.setItems(items);
            }
        });*/
    }

    render() {
        return (
            <EventList list={this.state.items} />
        )
    }

}