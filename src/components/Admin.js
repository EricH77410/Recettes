import React from 'react';

// Component
import 	AjouterRecette from './AjouterRecette';

class Admin extends React.Component {

	traiterChangment = (evt, key) => {
		const recette = this.props.recettes[key];

		const majRecette = {
			...recette,
			[evt.target.name]: evt.target.value
		};

		this.props.updateRecette(key, majRecette);
	}

	renderAdmin = (key) => {
		const recette = this.props.recettes[key];
		return (
			<div className="card" key={key}>
				<form className="admin-form">
					<input
						onChange={e => this.traiterChangment(e, key)}
						type="text"
						name="nom"
						placeholder="Nom de la recette"
						value={recette.nom}/>
					<textarea
						name="description"
						rows="3"
						onChange={e => this.traiterChangment(e, key)}
						value={recette.description}
						placeholder="Description de la recette">
					</textarea>
					<input
						onChange={e => this.traiterChangment(e, key)}
						type="text"
						name="image"
						placeholder="URL de l'image"
						value={recette.image}/>
					<input
						onChange={e => this.traiterChangment(e, key)}
						type="text"
						name="video"
						placeholder="URL de la video"
						value={recette.video}/>
					<input
						onChange={e => this.traiterChangment(e, key)}
						type="text"
						name="tempsPreparation"
						placeholder="Temps de préparation"
						value={recette.tempsPreparation}/>
					<input
						onChange={e => this.traiterChangment(e, key)}
						type="text"
						name="tempsCuisson"
						placeholder="Temps de cuisson"
						value={recette.tempsCuisson}/>
					<textarea
						onChange={e => this.traiterChangment(e, key)}
						name="ingredients"
						rows="3"
						value={recette.ingredients}
						placeholder="Liste des ingrédients"></textarea>
					<textarea
						onChange={e => this.traiterChangment(e, key)}
						name="instructions"
						rows="15"
						value={recette.instructions}
						placeholder="Liste des instructions"></textarea>
				</form>
				<button onClick={()=>this.props.supprimerRecette(key)}>Supprimer</button>
			</div>
		)
	}

	render() {
		const adminCards = Object
			.keys(this.props.recettes)
			.map(this.renderAdmin);
		return (
			<div className="cards">
				<AjouterRecette ajouterRecette={this.props.ajouterRecette} />
				{adminCards}
				<footer>
					<p>Rico</p>
				</footer>
			</div>
		)
	}

	static propTypes = {
		recettes: React.PropTypes.object.isRequired,
		chargerExemple: React.PropTypes.func.isRequired,
		ajouterRecette: React.PropTypes.func.isRequired,
		updateRecette: React.PropTypes.func.isRequired,
		supprimerRecette: React.PropTypes.func.isRequired
	};

}

export default Admin;
