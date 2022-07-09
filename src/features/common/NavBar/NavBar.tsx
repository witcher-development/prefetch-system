import React from 'react';

import { Link } from '@common/Navigation';


export const NavBar = () => (
	<nav>
		<ul>
			<li><Link to={'/'}>Home</Link></li>
			<li><Link to={'/documents'}>Documents</Link></li>
			<li><Link to={'/templates'}>Templates</Link></li>
			<li><Link to={'/automations'}>Automations</Link></li>
			<li><Link to={'/teams'}>Teams</Link></li>
		</ul>
	</nav>
);