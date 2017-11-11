import React from 'react';

class Card extends React.Component {

	// Création du lien pour la vidéo ...
	getVideoIfExist = (link) => {
		if (link){
			return (
				<div>
					<span className="glyphicon glyphicon-film"> </span> <a href={link}>Video</a>	
				</div>				
			)
		}
	};

	editRecette = () => {
		console.log(this.props.id);
	}

	render() {

		const ingredients = this.props.details.ingredients.split(',').map((item, key) => <li key={key}>{item}</li>);

		const instructions = this.props.details.instructions.split('\n').map((item, key) => <li key={key}>{item}</li>);

		return (
			<div className="card">

				<div className="image">
					<img src={this.props.details.image} alt="" />
				</div>

				<div className="recette">

					<h2>{this.props.details.nom}</h2>
					<h4>{this.props.details.description}</h4>
					<p>
						<span className="glyphicon glyphicon-time time"></span> {this.props.details.tempsPreparation}
						<span className="glyphicon glyphicon-fire cuisson"></span> {this.props.details.tempsCuisson}
						<span className="glyphicon glyphicon-education dificulty"></span> {this.props.details.difficulte}
					</p>

					<ul className="liste-ingredients">
						{ingredients}
					</ul>

					<ol className="liste-instruction">
						{instructions}
					</ol>

					{this.getVideoIfExist(this.props.details.video)}

					<div className="action-button">
						<button className="edit-button" onClick={this.editRecette}><span className="glyphicon glyphicon-pencil"></span> Editer</button>
						<button className="delete-button"><span className="glyphicon glyphicon-trash"></span> Supp.</button>
						<button className="liste-button"><span className="glyphicon glyphicon-euro"></span> Liste</button>
						<button className="menu-button"><span className="glyphicon glyphicon-glass"></span> Menu</button>
					</div>
				</div>
			</div>
		)
	}

	static propTypes = {
	  details: React.PropTypes.object.isRequired
	};
}

export default Card;