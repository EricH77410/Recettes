import React from 'react';
import Header from './Header';

// Firebase
import base from '../base';

// Component
import MiniCard from './MiniCard';

class Article extends React.Component{
	render(){
		return (
		<div className="col-md-4 articles">
			<h3>{this.props.art.titre}</h3>
			<img src={this.props.art.img} alt=""/>
			<p>{this.props.art.text}</p>
		</div>
		)
	}

	static propTypes = {
		art: React.PropTypes.object.isRequired
	}
}

class Home extends React.Component {

	constructor(props){
	  super(props);

	  this.state = {
			articles: {
				art1: {
					titre:'Article 1',
					img: 'http://images.marmitoncdn.org/pixcontent/70e30513-8902-4bf4-8c07-70d57b779a8f/77831630-0b47-44f5-b021-10cc5a908390/recette-francaise.jpg',
					text: 'Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Debitis atque recusandae sed quidem officiis harum nobis dolor! Nobis doloremque, soluta ad sit vero perferendis officia repellat, nostrum error incidunt ipsum.'
				},
				art2: {
					titre:'Article 2',
					img:'http://img.cac.pmdstatic.net/fit/http.3A.2F.2Fwww.2Ecuisineactuelle.2Efr.2Fvar.2Fcui.2Fstorage.2Fimages.2Frecettes-de-cuisine.2Frecettes-pour-tous.2Ffamiliale.2Fpancake-rapide-117877.2F1086974-3-fre-FR.2Fpancake-rapide.2Ejpg/748x372/crop-from/center/pancake-rapide.jpeg',
					text: 'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Debitis atque recusandae sed quidem officiis harum nobis dolor! Nobis doloremque, soluta ad sit vero perferendis officia repellat, nostrum error incidunt ipsum.'
				},
				art3: {
					titre:'Article 3',
					img: 'http://images.telerama.fr/medias/2016/01/media_137571/les-recettes-de-cuisine-facile-sur-facebook-pornfood-ad-nauseam,M299776.jpg',
					text: 'Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Debitis atque recusandae sed quidem officiis harum nobis dolor! Nobis doloremque, soluta ad sit vero perferendis officia repellat, nostrum error incidunt ipsum.'
				},
			},
			recettes: ''
		};
	}
	componentWillMount() {
		this.ref = base.syncState(`Rico/recettes`, {
			context: this,
			state: 'recettes'
		});
	}

	render(){

		const articles = Object
			.keys(this.state.articles)
			.map((key)=> <Article key={key} art={this.state.articles[key]} />);

		const recipes = Object
			.keys(this.state.recettes)
			.map((key)=> <MiniCard key={key} recette={this.state.recettes[key]} id={key}/>);

		return (

			<div>
				<Header />
				<div className="container home">
					<div className="jumbotron">
						<h3>Bienvenue</h3>
					</div>

					<div className="row">
						{articles}
					</div>
					<hr/>
						<h3>Liste des recettes</h3>
					<hr/>
					<div className="display-recipe-home">
						{recipes}
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
