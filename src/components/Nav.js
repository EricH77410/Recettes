import React from 'react';

class Nav extends React.Component {

	render () {
		return (
			<ul className="nav-bar">
				<li>
					<a href="/">Acceuil</a>
				</li>
				<li>
					<a href="/recettes">Recettes</a>
				</li>
				<li>
					<a href="/menu">Menu</a>
				</li>
				<li>
					<a href="/liste">Liste des courses</a>
				</li>
				
			</ul>
		)
	}
}

export default Nav;