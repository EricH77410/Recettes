import React from 'react';

import Header from './Header';
// Firebase
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDJiwLP4MNWIC6xOzDtVgdVphJEKxjj9Ss",
    authDomain: "recettes-2d2b5.firebaseapp.com",
    databaseURL: "https://recettes-2d2b5.firebaseio.com",
    projectId: "recettes-2d2b5",
    storageBucket: "recettes-2d2b5.appspot.com",
    messagingSenderId: "237628212936"
  };

firebase.initializeApp(config);

class FullDisplay extends React.Component{

	// on fait quoi, on récupére la recette depuis la bdd ?
	constructor(props){
	  super(props);

	  this.state = {
			recette: ''
		};
	}

	componentWillMount(){
		const root = firebase.database().ref().child('Rico/recettes');
		const recipe = root.child(this.props.params.key);
		const that = this;
		recipe.on('value', function (snap) {
			that.setState({recette: snap.val()});
		})
	}

	render(){
    let ing;
    let inst;
    if (this.state.recette.ingredients) {
      ing = this.state.recette.ingredients.split(',').map((ingr, i)=>{
        return <li key={i}>{ingr}</li>
      })

      inst = this.state.recette.instructions.split('\n').map((ins, i)=>{
        return <li key={i}>{ins}</li>
      })
  }
		return (
      <div>
        <Header />
        <div className="card full container">
			  <h3>{this.state.recette.nom}</h3>
          <img src={this.state.recette.image} width="300" height="300" alt={this.state.recette.nom }/>
				  <p>{this.state.recette.description}</p>
          <ul className="liste-ingredients">
            {ing}
          </ul>
          <ol className="liste-instruction">
            {inst}
          </ol>
			  </div>
      </div>
		)
	}
}

export default FullDisplay;
