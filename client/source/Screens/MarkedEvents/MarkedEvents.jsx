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
                id: 1,
                title: "Front In Poa",
                description: "O sit voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa evento que consagra designers e desenvolvedores da web. Sed ut perspiciatis unde omnis iste natus error sit sit voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa voluptatem accusantium doloremque laudantium, totam remaperiam, eaque ipsa quae ab illo inventore veritatis etaudantium voluptatem lorem ipsum",
                location: "R. Cel. Genúino, 130 - Centro Histórico, Porto Alegre - RS",
                date: "17/09/2017 9hr 30min às 19hr 30min",
                price: "A partir de R$ 250,00",
                flagged: false,
                logo: "source/imgs/logo-frontinpoa.png",
                mainColor: "#e63c82"
            },
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
            },
            {
                id: 3,
                title: "AWS Experience",
                description: "O principal objetivo principal objetivo principal objetivo do AWS Experience é possibilitar.",
                location: "Av. Diário de Notícias, 300 - Cristal, Porto Alegre - RS",
                date: "17/09/2017 9hr 30min às 19hr 30min",
                price: "R$ 100,00",
                flagged: false,
                logo: "source/imgs/logo-aws.png",
                mainColor: "#f79025"
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