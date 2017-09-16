import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';

const history = createBrowserHistory();

import MainWrapper from "./components/MainWrapper.jsx";
import "./style/style.scss";

class App extends Component {
	static propTypes = {
		name: PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router history={history}>
				<MainWrapper history={history} />
			</Router>
		);
	}
}


render(
	<App />,
	document.getElementById('root')
);