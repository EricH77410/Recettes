import React from 'react';
import Header from './Header';

class Menu extends React.Component{
	render(){
		return (
			<div>
				<Header />
				<div className="container">
					<h3>Menu</h3>
				</div>
			</div>			
		)
	}
}

export default Menu;