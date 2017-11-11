import React from 'react';


class AjouterRecette extends React.Component {

	creerRecette = (evt) => {
		evt.preventDefault();

		const recette = {
			nom: this.nom.value,
			image: this.image.value,
			ingredients: this.ingredients.value,
			instructions: this.instructions.value,
			tempsPreparation: this.tempsPreparation.value,
			tempsCuisson: this.tempsCuisson.value,
			difficulte: 'facile',
			description: this.description.value,
			video: this.video.value
		};

		this.props.ajouterRecette(recette);
		this.recetteForm.reset();
	}

	render () {
		return (
			<div className="card">
				<form className="admin-form ajouter-recette"
					ref={input => this.recetteForm = input} 
					onSubmit={(evt) => this.creerRecette(evt)}
				>

					<input ref={input => this.nom = input} type="text" placeholder="Nom de la recette" />

					<textarea ref={input => this.description = input} rows="3" 
						placeholder="Description de la recette"></textarea>

					<input ref={input => this.image = input} type="text" placeholder="URL de l'image"/>
					<input ref={input => this.video = input} type="text" placeholder="URL de la video"/>
					<input ref={input => this.tempsPreparation=input} placeholder="Temps de préparation" type="text"/>
					<input ref={input => this.tempsCuisson=input} placeholder="Temps de cuisson" type="text"/>
					<textarea ref={input => this.ingredients = input} rows="3" 
						placeholder="Liste des ingrédients séparés par une virgule"></textarea>

					<textarea ref={input => this.instructions = input} rows="15"
						placeholder="Les des instructions (une par ligne)"></textarea>
					<button type="submit">+ Ajouter la recette</button>
				</form>
			</div>
		)
	}

	static propTypes = {
		ajouterRecette: React.PropTypes.func.isRequired
	}
}

export default AjouterRecette;