import React, { Component } from 'react';
import EventList from 'screens/Home/Partials/Menu/Partials/EventList/EventList.jsx';

const backend = {
    url: "http://localhost:8000/future",
} 

export default class FutureEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: null
        }
    }

    setItems(items) {
        this.setState({
            items: items
        });
    }

    requestFutureItems() {
        fetch(`${backend.url}`, {
            mode: "cors",
            success: (items) => {
                this.setItems(items);
            }
        });
    }

    render() {
        return (
            <EventList list={this.state.items} />
        )
    }

}