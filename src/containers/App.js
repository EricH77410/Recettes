// React
import React from 'react';

//Components
import Header from '../components/Header';
import Admin from '../components/Admin';
import Card from '../components/Card';

// Importer les recettes
//import recettes from '../recettes';

// Firebase
import base from '../base';

class App extends React.Component {

	state = {
		recettes: {}
	};

	componentWillMount() {
		this.ref = base.syncState(`Rico/recettes`, {
			context: this,
			state: 'recettes'
		});
	}

	componentWillUnmount() {
	  base.removeBinding(this.ref);
	}

	chargerExemple = () => {
		//this.setState({ recettes });
	};

	ajouterRecette = (recette) => {
		const recettes = {...this.state.recettes};
		const timeStamp = Date.now();
		recettes['recette-'+timeStamp] = recette;
		this.setState({recettes})
	};

	updateRecette = (key, newVersion) => {
		const recettes = {...this.state.recettes};
		recettes[key] = newVersion;
		this.setState ({recettes});
	};

	supprimerRecette = (key) => {
		const recettes = { ...this.recettes};
		recettes[key] = null;
		this.setState({ recettes });
	};

	render() {

		const cards = Object
			.keys(this.state.recettes)
			.map(key => <Card id={key} key={key} details={this.state.recettes[key]} />);

		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo} />
				<div className="cards">
					{cards}
				</div>
				<Admin
 					recettes={this.state.recettes}
 					chargerExemple={this.chargerExemple}
 					ajouterRecette={this.ajouterRecette}
 					updateRecette={this.updateRecette}
 					supprimerRecette={this.supprimerRecette}
 				/>
			</div>
		)
	}

	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

export default App;
