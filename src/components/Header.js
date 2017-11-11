import React from 'react';

// Nav bar
import Nav from './Nav';

class Header extends React.Component {

	render() {
		return (
			<header className="navbar-fixed-top">
				<h1>Rico's cooking</h1>
				<Nav />
			</header>
		)
	}

	static propTypes = {
	  //pseudo: React.PropTypes.string.isRequired
	};
}

export default Header;
