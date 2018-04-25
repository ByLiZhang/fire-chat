import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
	render(){
		return (
			<nav>
				<div className='nav-wrapper'>
					<Link to='/' className='brand-logo'>Fire Chat</Link>
					<ul className='right'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/chat'>Chat</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;