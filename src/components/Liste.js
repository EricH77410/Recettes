import React from 'react';
import Header from './Header';

// Firebase
import base from '../base';

class ItemCourse extends React.Component{	
	render(){
		return (
			<table className="table table-striped">
				<caption><h3>{this.props.liste.recette}</h3></caption>
					<tbody>
						{
							this.props.liste.ingredients.map((ing, key)=><Ingredient ingredient={ing} key={key} />)
						}	
					</tbody>						
			</table>							
		)
	}
}

class Ingredient extends React.Component{
	render(){
		return (				
				<tr>
					<td>
						{this.props.ingredient}					
					</td>
					<td>
 						<button className="btn delete-button"> Remove</button>
 					</td>
 					<td>
 						<button className="btn edit-button"> Fait</button>
 					</td>				
				</tr>								
		)
	}
}

class Liste extends React.Component{

	state = {
		liste:[]
	}

	componentWillMount() {
		 this.ref = base.syncState('Rico/liste', {
		 	context: this,
		 	state: 'liste'
		 });
	}

	componentWillUnmount() {
	  base.removeBinding(this.ref);
	}

	addDemo(){
		console.log('add demo');
	}

	render(){

		const items = Object
			.keys(this.state.liste)
			.map((key) => { 
				console.log(key);
				return <ItemCourse key={key} liste={this.state.liste[key]}/> 
			});

		return (
			<div>
				<Header />
				<div className="container">					
					<div className="table-responsive">
						{items}
					</div>																			
				</div>
			</div>			
		)
	}
}

export default Liste;

// OLD

// <tr>
// 					<td>
// 						{this.props.liste.recette}
// 					</td>
// 					<td></td>					
// 					{
// 						this.props.liste.ingredients.map((ing, key)=><Ingredient ingredient={ing} key={key} />)
// 					}		
// 					<td>
// 						<button className="btn delete-button"> Remove</button>
// 					</td>
// 					<td>
// 						<button className="btn edit-button"> Fait</button>
// 					</td>							
// 				</tr>	