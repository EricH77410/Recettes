import React from 'react';

class Edit extends React.Component{

	traiterChangment = (evt, key) => {
		const recette = this.props.recettes[key];

		const majRecette = {
			...recette,
			[evt.target.name]: evt.target.value
		};

		this.props.updateRecette(key, majRecette);
	}

	render() {
		const recette 	= this.props.recette;
		const key 		= this.props.key;
		
		return (
			<div className="card">
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
						onChange={e => this.traiterChangment(e, this.props.key)} 
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

	static propTypes = {
	  recette: React.PropTypes.object.isRequired,
	  key: React.PropTypes.string.isRequired,
	};
}

export default Edit;