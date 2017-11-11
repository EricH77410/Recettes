import React from 'react';

class Nav extends React.Component {
	state={
		term:''
	}
	onSearchChange = (e) => {
		const term = e.target.value;
		this.setState(()=>({term}))
	}
	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.term)
	}
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
				<li className="input-search">
					<form className="navbar-form" role="search" onSubmit={this.onSubmit}>
						<div className="input-group">
							<input onChange={this.onSearchChange} type="text" className="form-control" placeholder="Recherche" name="q"/>
							<div className="input-group-btn">
								<button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
							</div>
						</div>
					</form>
				</li>

			</ul>
		)
	}
}

export default Nav;
