// React
import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Components
import App from './containers/App';
//import Connexion from './components/Connexion';
import NotFound from './components/NotFound'
import Home from './components/Home';
import Menu from './components/Menu';
import Liste from './components/Liste';
import Edit from './components/Edit';
//import Card from './components/Card';
import FullDisplay from './components/FullDisplay';

// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';

// CSS
import './style/index.css';
import './style/css/bootstrap.css';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Home} />
				<Match pattern="/recette/edit/:key" component={Edit} />
				<Match pattern="/recette/view/:key" component={FullDisplay} />
				<Match exactly pattern="/recettes" component={App} />
				<Match exactly pattern="/menu" component={Menu} />
				<Match exactly pattern="/liste" component={Liste} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
  	<Root />
	</Provider>,
  document.getElementById('root')
);

// <Match exactly pattern="/home" component={Home} />
// <Match pattern="/box/:pseudo" component={App} />
