import React, { Component } from 'react';
import EventList from 'screens/Partials/EventList/EventList.jsx';
import EventModal from "screens/Partials/EventModal/EventModal.jsx";
import Icon from "screens/Partials/Icon/Icon.jsx";

const backend = {
    url: "http://localhost:8000/api/v1/evento",
}

export default class MyEvents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            openModal: false,
            activeItem: null
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

    openModal = () => {
        this.setState({
            openModal: true
        });
    }

    closeModal = () => {
        this.setState({
            openModal: false,
            activeItem: null
        }, this.requestItens);
    }

    setActiveItem = (item) => {
        this.setState({
            activeItem: item,
            openModal: true
        });
    }

    render() {
        return (
            <div>
                <div className="new-event-button" onClick={this.openModal}>
                    <div>
                        <Icon size={22} icon={"plus"}/>
                    </div>
                </div>
                <EventModal saveEvent={this.saveEvent} activeItem={this.state.activeItem} openModal={this.state.openModal} closeModal={this.closeModal} />
                <EventList edit setActiveItem={this.setActiveItem} list={this.state.items} />
            </div>
        )
    }

}