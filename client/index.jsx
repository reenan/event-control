import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from 'react-dom';

const history = createBrowserHistory();

import App from "source/App.jsx";
import "source/App.scss";

class Wrapper extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router history={history}>
				<App history={history} />
			</Router>
		);
	}
}

render(
	<Wrapper />,
	document.getElementById('root')
);
