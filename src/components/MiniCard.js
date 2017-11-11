import	React from 'react';
//import {Link} from 'react-router';

// class MiniCard extends React.Component{
//
//
// 	render() {
// 		return (
// 			<div className="mini-card">
// 				<h3>{this.props.recette.nom}</h3>
// 				<img src={this.props.recette.image} alt=""/>
// 				<p>{this.props.recette.description}</p>
// 				<a href={'/recette/view/'+this.props.id}><button className="btn btn-success">Voir ...</button></a>
// 			</div>
// 		)
// 	}
// 	// static propTypes = {
// 	//   recette: React.PropTypes.object.isRequired,
// 	// };
// }

class MiniCard extends React.Component {
  render(){
		const recette = this.props.recette;
    return(
			<section id="apps">
    	<ul>
      	<li className="card" tabIndex="0" aria-haspopup="true">
        	<div className="intro">
          	<img src={recette.image} width="140" height="140" alt="Pixelmator app icon" />
          	<h3>{recette.nom}</h3>
        	</div>
        	<div className="info">
          	<p className="publisher"><strong>{recette.nom}</strong></p>
						<p className="description">{recette.description}</p>
          	<a  href={'/recette/view/'+this.props.id} title="Voir la recette" aria-label="Voir la recette">
							<button className="btn btn-success">Voir...</button>
						</a>
        	</div>
      	</li>
      </ul>
  </section>
    );
  }
}

export default MiniCard;
