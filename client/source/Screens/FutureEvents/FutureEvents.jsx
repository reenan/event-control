import React, { Component } from 'react';
import EventList from 'screens/Partials/EventList/EventList.jsx';

const backend = {
    url: "http://localhost:8000/api/v1/evento",
}

export default class FutureEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentWillMount() {
        this.requestItens();
    }

    setItems = (items) => {
        this.setState({
            items: items
        });
    }

    requestItens = () => {
        $.ajax({
            url: backend.url,
            success: (data) => {
                this.setItems(data);
            }
        })
    }


    render() {
        return (
            <EventList afterChangeFavorite={this.requestItens} canMark list={this.state.items} />
        )
    }

}